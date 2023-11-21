import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FooterLayout from "./Components/Footer/Footer";
import Login from "./Components/LoginPage/Login";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import MarketPlace from "./Components/MarketPlace";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <MarketPlace /> */}
      {/* <Login /> */}
      <HomePage />
      <FooterLayout />
    </BrowserRouter>
  );
}

export default App;
