import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Resume, Projects } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
      <Routes>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
