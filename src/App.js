import { Route, Routes } from "react-router-dom";
import "./App.css";
import Calendar from "./Pages/Calendar/Calendar";
import CompletedTask from "./Pages/CompletedTask/CompletedTask";
import Home from "./Pages/Home/Home";

import Header from "./Pages/Share/Header";
import NotFount from "./Pages/Share/NotFount";
import Todo from "./Pages/Todo/Todos";
import TodoUpdate from "./Pages/Todo/TodoUpdate";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/completedtask" element={<CompletedTask />} />
        <Route path="/todos" element={<Todo />} />
        <Route path="update/:id" element={<TodoUpdate />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  );
}

export default App;
