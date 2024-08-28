import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AllSpace from "./pages/AllSpace";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#edf0fe] text-[#2C2C2C] h-auto px-4 pt-4 pb-8 overflow-x-hidden lg:px-8 lg:pt-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/allspace" element={<AllSpace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
