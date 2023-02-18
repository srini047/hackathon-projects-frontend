import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ideas from "./pages/Ideas";
import Idea from "./pages/Idea";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="home" />} /> */}
          <Route path="idea/" element={<Idea />} />
          <Route path="ideas" element={<Ideas />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
