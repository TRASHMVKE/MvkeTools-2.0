import jwt from "jsonwebtoken";
import { authModel } from "../Schemas/auth.Schema.js";
import authSchemaZod from "../Schemas/zodAuthSchema.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const register = async (req, res) => {
  try {
    // validar datos de entrada;
    const validateData = authSchemaZod.parse(req.body);

    // verificar si hay un usuario creado con el username escrito

    const isMatch = await authModel.findOne({
      userName: validateData.userName,
    });
    console.log(isMatch);
    if (isMatch)
      return res.status(404).json({ message: "user already register!" });
    //encriptar la contrasena

    const hashPassword = await bcrypt.hash(validateData.password, 10);
    validateData.password = hashPassword;

    // crear nuevo documento y guardarlo en la DB;
    const newAuth = new authModel(validateData);
    await newAuth.save();

    // generar un token
    const token = jwt.sign({ id: newAuth._id }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token);

    // enviar respuesta junto al token
    res.status(201).json({ newAuth, token });
  } catch (error) {
    res.status(500).send(error);
  }
};

export const login = async (req, res) => {
  try {
    // validar entrada de  datos
    const validateData = authSchemaZod.parse(req.body);

    // buscar usuario en la db;
    const user = await authModel.findOne({ userName: validateData.userName });
    if (!user) return res.status(404).json({ message: "user not found!" });
    //validar la contrasena
    const passValidate = bcrypt.compare(validateData.password, user.password);
    if (!passValidate) {
      return res.status(401).json({ message: "invalid Credential" });
    }
    // crear token

    const token = jwt.sign({ id: user._id, userName: user.userName }, JWT_SECRET, { expiresIn: "1h" });
    if (!token) return res.status(404).json({ Message: "no token!" });
    res.cookie("token", token);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Internal server Error" });
    console.log(error);
  }
};

export const verifyToken = (req, res) => {
  const { token } = req.cookies;
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded.id;
    res.status(200).json({ message: "Token is valid", userId: decoded.id, userName: decoded.userName });
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const logOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ message: "Logout successful" });
};
