import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FooterLayout from "./Components/Footer/Footer";
import Login from "./Components/LoginPage/Login";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import MarketPlace from "./Components/MarketPlace";
import FirstPage from "./Components/HomePage/FirstPage";
import Layout from "./Components/Layout";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/marketplace" element={<MarketPlace />}></Route>
      </Routes>
      <FooterLayout />
    </>
  );
}

export default App;
