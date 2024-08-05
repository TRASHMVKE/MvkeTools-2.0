import { useContextPage } from "../context/ContextPage";
import Card from "./Card";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function PageList() {
  const { setAuthenticated, verifyUser, filteredData } = useContextPage();
  console.log(filteredData)

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      setAuthenticated(false);
      return;
    }
    verifyUser();
    setAuthenticated(true);
  }, []);

  return (
    <section>
      <div>
        <ToastContainer />
        {filteredData ? (
          <div className="p-10 gap-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {filteredData.map((page) => (
              <div key={page._id}>
                <Card page={page} />
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
