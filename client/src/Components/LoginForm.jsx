import React from "react";
import { useState } from "react";
import { useContextPage } from "../context/ContextPage";

export default function LoginForm() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser, loginUser } = useContextPage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataForm = { userName, password };

    try {
      await loginUser(dataForm);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" ">
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box max-w-md overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
          <div className="flex flex-col gap-3">
            <div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="username"
                className="mt-1 p-2 w-full backdrop-blur-lg bg-white/5 border border-gray-600 rounded-md text-white"
              />
            </div>
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full backdrop-blur-lg bg-white/5 border border-gray-600 rounded-md text-white"
                placeholder="password"
              />
            </div>

            <button
              className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </form>
  );
}
