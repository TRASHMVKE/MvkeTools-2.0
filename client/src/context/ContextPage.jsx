import { createContext, useContext, useEffect, useState } from "react";
import { getPage, login, register, gertUserInfo, Logout } from "../API/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const context = createContext();

export const useContextPage = () => {
  if (!context) {
    throw new Error("useContex must be used within a ContexProvider");
  }

  return useContext(context);
};
export default function ContextPage({ children }) {
  const [open, isOpen] = useState(false);
  const [data, setData] = useState([]);
  const [autenticated, setAuthenticated] = useState(false);
  const [userData, setUserData] = useState("");
  const [loading, setLoading] = useState(false);
  const [filter, setFilters] = useState("all");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await getPage();
      setFilteredData(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  };

  const loginUser = async (user) => {
    try {
      const response = await login(user);
      setAuthenticated(true);
      notify("success", "Login successfully");
      return response;
    } catch (error) {
      console.log(error);
    }
  };
  const registerUser = async (user) => {
    try {
      const response = await register(user);
      notify("success", "Register successfully");
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const verifyUser = async () => {
    try {
      const response = await gertUserInfo();
      if (response.status === 200) {
        setAuthenticated(true);
        setUserData(response.data.userName);
      }
    } catch (error) {
      setAuthenticated(false);
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      const response = await Logout();
      if (response.status === 200) {
        setAuthenticated(false);
      }
      notify("success", "Logout successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const notify = (type, message) =>
    toast[type](message, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    if (filter === "all") {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter((item) => item.category === filter));
    }
  }, [filter]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <context.Provider
      value={{
        data,
        setData,
        open,
        isOpen,
        loginUser,
        registerUser,
        setAuthenticated,
        autenticated,
        verifyUser,
        userData,
        logout,
        notify,
        setLoading,
        loading,
        filter,
        setFilters,
        filteredData,
      }}
    >
      {children}
    </context.Provider>
  );
}
