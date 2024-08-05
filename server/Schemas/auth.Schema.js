import { Schema, model } from "mongoose";

const authSchema = new Schema({
  userName: String,
  password: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

export const authModel = model("auth", authSchema);
