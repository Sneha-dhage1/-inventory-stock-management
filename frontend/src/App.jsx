import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ThreeScreens from "./pages/ThreeScreens";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      {page === "login" && <Login setPage={setPage} />}
      {page === "register" && <Register setPage={setPage} />}
      {page === "showcase" && <ThreeScreens />}
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}
