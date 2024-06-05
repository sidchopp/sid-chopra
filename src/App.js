import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Home2, Resume } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/home2" element={<Home2 />} />
      </Routes>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
