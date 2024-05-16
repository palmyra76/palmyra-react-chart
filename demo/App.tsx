import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import HomePage from "./pages/HomePage";
import { MainLayout } from "./layout/main/MainLayout";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout appTitle='Chart Demo' />} >
            <Route path="/home" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App