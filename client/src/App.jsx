import { useState } from "react";
import Header from "./Components/Header";
import PageList from "./Components/PageList";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <PageList/>
    </div>
  );
}

export default App;
