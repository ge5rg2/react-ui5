import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./Detail";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </>
  );
};

export default Router;
