import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import './themes/Layout.css';
import './themes/colorDef.css';
import './themes/blue/Colors.css';
import HomePage from "./pages/HomePage";
import { MainLayout } from "./layout/main/MainLayout";
import SimpleChartPage from "./pages/SimpleChartPage";
import SimpleLineCharts from "./components/simpleChart/Line/SimpleLineCharts";
import GroupedBarChart from "./components/simpleChart/Bar/GroupedBarChart";
import StackedBarChart from "./components/simpleChart/Bar/StackedBarChart";
import BarChartPage from "./pages/barCharts/BarChartPage";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Chart Demo' />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/simpleChart" element={<SimpleChartPage />} />
            <Route path="/simpleChart/barChart" element={<BarChartPage />} />
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
