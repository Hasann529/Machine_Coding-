import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Toast from "./components/Toast";
import Star from "./components/Star";
import Pagination from "./components/Pagination";
import Otp from "./components/Otp";
import Carousel from "./components/Carousel";
import InfiniteScroll from "./components/InfiniteScroll";
import Search from "./components/Search";
import ProgressBar from "./components/ProgressBar";
import InteractiveShape from "./components/InteractiveShape";

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
        <Route path="/search" element={<Search />} />
        <Route path="/progress-bar" element={<ProgressBar />} />
        <Route path="/interactive-shape" element={<InteractiveShape />} />
      </Routes>
    </Router>
  );
}

export default App;
