import { useState } from "react";
import axios from "axios";
import { useContextPage } from "../context/ContextPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Form() {
  const { setData, data, notify } = useContextPage();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [pageLink, setPageLink] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("pageLink", pageLink);
    formData.append("category", category);

    try {
      const response = await toast.promise(
        axios.post("http://localhost:4000/page/page", formData),
        {
          pending: "Uploading...",
          success: "Page created successfully",
          error: "Error uploading page",
        }
      );
      setData([...data, response.data.newPage]);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" flex flex-col gap-3 max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12"
    >
      <div>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Title"
          className="mt-1 p-2 w-full backdrop-blur-lg bg-white/5 border border-gray-600 rounded-md text-white"
        />
      </div>
      <div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="mt-1 p-2 w-full backdrop-blur-lg bg-white/5 border border-gray-600 rounded-md text-white"
          placeholder="Description"
        />
      </div>
      <div>
        <input
          type="text"
          value={pageLink}
          onChange={(e) => setPageLink(e.target.value)}
          required
          className="mt-1 p-2 w-full backdrop-blur-lg bg-white/5 border border-gray-600 rounded-md text-white"
          placeholder="Page Link"
        />
      </div>
      <div>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="mt-1 p-2 w-full backdrop-blur-lg bg-white/5 border border-gray-600 rounded-md text-white"
          placeholder="Category"
        />
      </div>
      <div>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
          className="flex h-10 w-full rounded-md border border-input bg-white/5 backdrop-blur-lg px-3 py-2 text-sm text-gray-400 file:border-0 file:bg-transparent file:text-gray-600 file:text-sm file:font-medium cursor-pointer "
        />
      </div>
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        type="submit"
      >
        Create
      </button>
    </form>
  );
}
