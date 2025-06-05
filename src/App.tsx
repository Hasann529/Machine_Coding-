import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Toast from "./components/Toast";
import Star from "./components/Star";
import Pagination from "./components/Pagination";
import Otp from "./components/Otp";
import Carousel from "./components/Carousel";
import InfiniteScroll from "./components/InfiniteScroll";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toast" element={<Toast />} />
        <Route path="/star" element={<Star />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/carousel" element={<Carousel />} />
        <Route path="/infinite-scroll" element={<InfiniteScroll />} />
      </Routes>
    </Router>
  );
}

export default App;
