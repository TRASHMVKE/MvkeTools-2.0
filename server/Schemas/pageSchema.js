import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageLink: String,
  pageLink: String,
  category: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

export const pageModel = mongoose.model("page", pageSchema);
