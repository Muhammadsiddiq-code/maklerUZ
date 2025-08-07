import { Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Home from "./pages/Home";
import Uylars from "./pages/Uylars";
import Students from "./pages/Students";
import Login from "./pages/Login";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/uylars" element={<Uylars />} />
        <Route path="/talabalar-uchun" element={<Students />} />
        <Route path="/kirish" element={<Login />} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
    </>
  );
}

export default App;
