import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbars from "./Components/Navbar/Navbars";
import Home from "./Pages/Home/Home";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/:search" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
