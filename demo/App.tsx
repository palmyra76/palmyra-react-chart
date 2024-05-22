import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import './themes/Layout.css';
import './themes/colorDef.css';
import './themes/blue/Colors.css';
import HomePage from "./pages/HomePage";
import { MainLayout } from "./layout/main/MainLayout";
import SimpleChartPage from "./pages/SimpleChartPage";
import BarChartPage from "./pages/barCharts/BarChartPage";
import GroupedBarChartPage from "./pages/groupedBarCharts/GroupedBarChartPage";
import StackedBarChartPage from "./pages/StackedBarCharts/StackedBarChartPage";
import LineChartPage from "./pages/lineCharts/LineBarChartPage";
import MultiLineBarChartPage from "./pages/lineCharts/MultiLineBarChartPage";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Chart Demo' />} >
            <Route path="/home" element={<HomePage />} />
            <Route path="/simpleChart" element={<SimpleChartPage />} />
            <Route path="/simpleChart/barChart" element={<BarChartPage />} />
            <Route path="/simpleChart/groupedBarChart" element={<GroupedBarChartPage />} />
            <Route path="/simpleChart/stackedBarChart" element={<StackedBarChartPage />} />
            <Route path="/simpleChart/lineChart" element={<LineChartPage />} />
            <Route path="/simpleChart/multiLineChart" element={<MultiLineBarChartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
