import './App.css' 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import QrCode from './componentnts/QrCode';
import Home from './componentnts/Home';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Navigate to="/resultservices/Neet2025/ViewQrCode" replace />} />
        <Route path="/resultservices/Neet2025/ViewQrCode" element={<QrCode />} />
        <Route path="/resultservices/Neet2025/ResultView" element={<Home />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
