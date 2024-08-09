import { CiUser } from "react-icons/ci";
import Form from "./Form";
import { useContextPage } from "../context/ContextPage";
import { useState } from "react";
import LoginForm from "./LoginForm";
import LogOut from "./LogOut";
import FIlters from "./FIlters";
import "@github/typing-effect-element";

export default function Header() {
  const { autenticated } = useContextPage();
  return (
    <header>
      <div className="flex justify-end m-3 gap-4">
        {/*boton de agregar */}
        {autenticated ? (
          <label htmlFor="addModal" className="cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              className="stroke-zinc-400 fill-none group-hover:fill-zinc-800 group-active:stroke-zinc-200 group-active:fill-zinc-600 group-active:duration-0 duration-300"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                strokeWidth="1.5"
              />
              <path d="M8 12H16" strokeWidth="1.5" />
              <path d="M12 16V8" strokeWidth="1.5" />
            </svg>
          </label>
        ) : (
          ""
        )}
        {/*user Button */}
        <label htmlFor="my_modal_7">
          <div className=" cursor-pointer flex bg-white  px-1.25 py-1.25 shadow-box-up rounded-2xl dark:bg-box-dark dark:shadow-box-dark-out  ">
            <div className="dark:shadow-buttons-box-dark rounded-2xl w-full  md:px-2 md:py-2 ">
              <a className="text-light-blue-light hover:text-black dark:text-gray-400 border-2 inline-flex items-center mr-4 last-of-type:mr-0 p-2.5 border-transparent bg-light-secondary shadow-button-flat-nopressed hover:border-2 hover:shadow-button-flat-pressed focus:opacity-100 focus:outline-none active:border-2 active:shadow-button-flat-pressed font-medium rounded-full text-sm text-center dark:bg-button-curved-default-dark dark:shadow-button-curved-default-dark dark:hover:bg-button-curved-pressed-dark dark:hover:shadow-button-curved-pressed-dark dark:active:bg-button-curved-pressed-dark dark:active:shadow-button-curved-pressed-dark dark:focus:bg-button-curved-pressed-dark dark:focus:shadow-button-curved-pressed-dark dark:border-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </label>
      </div>

      {/*h1 title */}
      <div className=" ml-12 md:flex md:items-center md:justify-center">
        <h1 className="text-7xl font-bold ">
          <typing-effect data-lines='["Tols for projects"]'>
            <span data-target="typing-effect.content"></span>
            <span data-target="typing-effect.cursor">|</span>
          </typing-effect>
        </h1>
      </div>

      {/*filtros*/}
      <div >
        <FIlters />
      </div>

      {/*agregar pagina form */}

      <div className={`absolute top-20 right-0 z-50  `}>
        {autenticated ? <Form /> : ""}
      </div>

      {/*form de logerse  */}

      <div className={`absolute top-20 right-0 z-50`}>
        {autenticated ? <LogOut /> : <LoginForm />}
      </div>
    </header>
  );
}
