import axios from "axios";

const imgbbApiKey = "b2817d5532b838b0a71aa8ce51ece53d";
const imgbbApiUrl = "https://api.imgbb.com/1/upload";

const uploadImage = async (imageBuffer) => {
  const formData = new FormData();
  formData.append("image", imageBuffer);
  formData.append("key", imgbbApiKey);

  const response = await axios.post(imgbbApiUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export default uploadImage;
