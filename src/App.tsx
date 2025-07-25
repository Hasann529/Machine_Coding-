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
import TrafficLight from "./components/TrafficLight";
import DragNDrop from "./components/DragNDrop";
import FileExplorer from "./components/FileExplorer";
import NestedComment from "./components/NestedComment";
import FAQ from "./components/FAQ";
import Modal from "./components/Modal";
import TypingEffect from "./components/TypingEffect";
import FileUploader from "./components/FileUploader";
import SnakeGame from "./components/SnakeGame";
import Crypto from "./components/Crypto";
import Calendar from "./components/Calendar";
import IndeterminateCheckBox from "./components/IndeterminateCheckBox";

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
        <Route path="/nested-comment" element={<NestedComment />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/typing-effect" element={<TypingEffect />} />
        <Route path="/file-uploader" element={<FileUploader />} />
        <Route path="/snake-game" element={<SnakeGame />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route
          path="/indeterminate-checkBox"
          element={<IndeterminateCheckBox />}
        />
      </Routes>
    </Router>
  );
}

export default App;
