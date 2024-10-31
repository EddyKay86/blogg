import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Post from "./pages/Post";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
