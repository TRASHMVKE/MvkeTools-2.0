import { Router } from "express";
import { register, login,verifyToken,logOut } from "../Controllers/auth.js";

const routes = Router();

routes.post("/register", register);
routes.post("/login", login);
routes.get("/check", verifyToken);
routes.get("/logout", logOut);

export default routes;
