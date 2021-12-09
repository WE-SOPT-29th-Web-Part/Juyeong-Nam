import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/write" element={<Write />} />
        <Route path="/" element={<Home />} />
        <Route element={<div>Page Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
