import { useContextPage } from "../context/ContextPage";

export default function FIlters() {
  const { setFilters } = useContextPage();
  return (
    <div
      className="flex items-center justify-center gap-5 mt-5"
      
    >
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        value={"all"}
        onClick={(e) => setFilters(e.target.value)}
      >
        All
      </button>
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        value={"libreria"}
        onClick={(e) => setFilters(e.target.value)}
      >
        libreria
      </button>
      <button
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
        value={"herramienta"}
        onClick={(e) => setFilters(e.target.value)}
      >
        herramienta
      </button>
    </div>
  );
}
