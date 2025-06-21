import './App.css' 
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import QrCode from './componentnts/QrCode';
import QrCode2 from './componentnts/QrCode2';
import Home from './componentnts/Home';
import Home2 from './componentnts/Home2';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Navigate to="/resultservices/Neet2025/ViewQrCode" replace />} />
        <Route path="/resultservices/Neet2025/ViewQrCode" element={<QrCode />} />
        <Route path="/resultservices/Neet2025/ResultView" element={<Home />} /> 
        <Route path="/resultservices/Neet2025/ResultView-candidate" element={<Home2 />} /> 
        <Route path="/resultservices/Neet2025/ViewQrCode-candidate" element={<QrCode2 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
