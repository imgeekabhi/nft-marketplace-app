import "./App.css";
import FooterLayout from "./Components/Footer/Footer";
import Login from "./Components/LoginPage/Login";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <FooterLayout />
    </div>
  );
}

export default App;
