import Header from "./Components/Header";
import PageList from "./Components/PageList";
import "./App.css";
import AOS from "aos";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <PageList />
    </div>
  );
}

export default App;
