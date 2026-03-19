import React from "react";
import Task1 from "./components/task1/Task1";
import { Route, Routes } from "react-router-dom";
import Task2 from "./components/task2/Task2";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Task1 />} />
      <Route path="/task2" element={<Task2 />} />
    </Routes>
  );
};

export default App;
