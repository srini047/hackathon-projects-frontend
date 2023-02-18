import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ideas from "./pages/Ideas";
import Idea from "./pages/Idea";
import Description from "./pages/Description";
import Title from "./pages/Title";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigate to="home" />} /> */}
          <Route path="idea" element={<Idea />} />
          <Route path="ideas" element={<Ideas />} />
          <Route path="description" element={<Description />} />
          <Route path="title" element={<Title />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
