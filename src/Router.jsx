import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Detail from "./page/Detail";
import ExRate from "./page/ExRate";
import ObjPage from "./page/ObjPage";
import TestChart from "./page/TestChart";
import TestChart2 from "./page/TestChart2";

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
      <Routes>
        <Route path="/test-chart2" element={<TestChart2 />}></Route>
      </Routes>
      <Routes>
        <Route path="/exchange-rate" element={<ExRate />}></Route>
      </Routes>
      <Routes>
        <Route path="/objaect-page" element={<ObjPage />}></Route>
      </Routes>
    </>
  );
};

export default Router;
