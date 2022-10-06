import React from "react";
import Home from "../../pages/Home/Home";
import Find from "../../pages/FindCar/Find";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/find" element={<Find />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
