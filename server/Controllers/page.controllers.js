import pageSchemaZod from "../Schemas/zodPageSchema.js";
import { pageModel } from "../Schemas/pageSchema.js";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRETkEY,
});

export const createPage = async (req, res) => {
  try {
    // Subir la imagen a Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Validar los datos de entrada
    const validateData = pageSchemaZod.parse(req.body);

    // Crear un nuevo documento de página con los datos validados
    const newPage = new pageModel({
      ...validateData,
      imageLink: result.url, // Asignar la URL de la imagen subida
    });

    // Guardar el nuevo documento en la base de datos
    await newPage.save();

    // Responder con un mensaje de éxito
    res.status(200).json({ newPage });
  } catch (error) {
    // Manejar errores
    res.status(500).json({ message: "Internal server Error" });
    console.log(error);
  }
};

export const getPage = async (req, res) => {
  try {
    const page = await pageModel.find();
    if (!page) return res.status(404).json({ message: "no page found!" });
    res.status(200).json(page);
  } catch (error) {
    res.status(500).json({ message: "Internal server Error" });
    console.log(error);
  }
};
