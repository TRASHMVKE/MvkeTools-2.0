import app from "./app.js";
import dotenv from "dotenv";
import dbConect from "./db.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

dbConect();
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
