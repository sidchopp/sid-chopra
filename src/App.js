import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Resume, Projects } from "./pages";
import { AnimatedPage } from "./components/layout/AnimatedPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <Home />
            </AnimatedPage>
          }
        />
        <Route
          path="/resume"
          element={
            <AnimatedPage>
              <Resume />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <Projects />
            </AnimatedPage>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
