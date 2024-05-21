import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import { MainLayout } from "./layout/main/MainLayout";
import SimpleChartPage from "./pages/SimpleChartPage";
import SimpleBarCharts from "./components/simpleChart/Bar/SimpleBarCharts";
import SimpleLineCharts from "./components/simpleChart/Line/SimpleLineCharts";
import GroupedBarChart from "./components/simpleChart/Bar/GroupedBarChart";
import StackedBarChart from "./components/simpleChart/Bar/StackedBarChart";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Chart Demo' />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/simpleChart" element={<SimpleChartPage />} />
            <Route path="/simpleChart/barChart" element={<SimpleBarCharts />} />
            <Route path="/simpleChart/groupedBarChart" element={<GroupedBarChart />} />
            <Route path="/simpleChart/stackedBarChart" element={<StackedBarChart />} />
            <Route path="/simpleChart/lineChart" element={<SimpleLineCharts />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
