import { BrowserRouter } from "react-router-dom";
import "./App.css";
import FooterLayout from "./Components/Footer/Footer";
import Login from "./Components/LoginPage/Login";
// import Navbar from "./Components/Navbar/Navbar";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Login />
      <FooterLayout />
    </BrowserRouter>
  );
}

export default App;
