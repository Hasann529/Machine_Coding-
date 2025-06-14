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
import TodoApp from "./components/TodoApp";
import VirtualizeList from "./components/VirtualizeList";
import Stepper from "./components/Stepper";
import Tab from "./components/Tab";
import TicTacToe from "./components/TicTacToe";
import MemoryGame from "./components/MemoryGame";
// import NestedComment from "./components/NestedComment";
import TrafficLight from "./components/TrafficLight";
import DragNDrop from "./components/DragNDrop";
import FileExplorer from "./components/FileExplorer";

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
        <Route path="/todo-app" element={<TodoApp />} />
        <Route path="/virtualize-list" element={<VirtualizeList />} />
        <Route path="/stepper" element={<Stepper />} />
        <Route path="/tab" element={<Tab />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/memory-game" element={<MemoryGame />} />
          <Route path="/memory-game" element={<MemoryGame />} />
        <Route path="/file-explorer" element={<FileExplorer />} />
        <Route path="/traffic-light" element={<TrafficLight />} />
        <Route path="/drag-n-drop" element={<DragNDrop />} />
      </Routes>
    </Router>
  );
}

export default App;
