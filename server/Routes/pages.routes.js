import { Router } from "express";
import { createPage, getPage } from "../Controllers/page.controllers.js";
import jwt from "jsonwebtoken";
import { readFile } from "fs/promises";

import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";



const pagesRoutes = Router();

const JWT_SECRET = process.env.JWT_SECRET;

// middleware

const authenticateToken = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) return res.status(401).json({ message: "no token" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// multer configuration

const storagePrueba = multer.diskStorage({
  destination: (req, file, cb) => {
    cd(null, "uploads/");
  },

  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

// Configuración de Cloudinary



const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

// rutas
pagesRoutes.post("/page", upload.single("image"), createPage);
pagesRoutes.get("/page", getPage);

export default pagesRoutes;
