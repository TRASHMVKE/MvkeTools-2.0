import axios from "axios";

const istance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default istance;
