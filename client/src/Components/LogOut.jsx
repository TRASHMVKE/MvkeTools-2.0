import { useContextPage } from "../context/ContextPage";

export default function LogOut() {
  const { userData, logout } = useContextPage();

  const handleLogOut = () => {
    logout();
  };

  return (
    <div className=" text-white flex flex-col gap-3 max-w-md mx-auto relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12">
      <h1 className="text-3xl font-bold">{userData}</h1>
      <button
        onClick={handleLogOut}
        className="bg-gradient-to-r from-purple-600 via-purple-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
      >
        LogOut
      </button>
    </div>
  );
}
