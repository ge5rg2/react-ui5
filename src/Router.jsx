import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./page/Detail";
import TestChart from "./page/TestChart";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Routes>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
      <Routes>
        <Route path="/test-chart" element={<TestChart />}></Route>
      </Routes>
    </>
  );
};

export default Router;
