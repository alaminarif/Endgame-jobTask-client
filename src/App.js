import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Calendar/Calendar";
import CompletedTask from "./Pages/CompletedTask/CompletedTask";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Share/Footer";
import Header from "./Pages/Share/Header";
import Todo from "./Pages/Todo/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completedtask" element={<CompletedTask />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
