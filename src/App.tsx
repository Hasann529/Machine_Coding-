import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Toast from "./components/Toast";
import Star from "./components/Star";
import Pagination from "./components/Pagination";
import Otp from "./components/Otp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/star" element={<Star />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/otp" element={<Otp />} />
      </Routes>
    </Router>
  );
}

export default App;
