import { Route, Routes } from "react-router-dom";
import { ChartPage } from "./pages/Chart/ChartPage.async";
import { TablePage } from "./pages/Table/TablePage.async";
import { Suspense } from "react";
import { Spin } from "antd";
import { PageLoader } from "./components/PageLoader/PageLoader";

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<TablePage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/chart" element={<ChartPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
