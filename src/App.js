import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Contact from "./components/contact";
import About from "./components/about";


function App() {
  return (
   <Router>
   <Routes>

    <Route path="/" exact element={<Home />} />
    <Route path="/about" exact element={<About />} />
    <Route path="/contact" exact element={<Contact />} />

   </Routes>
   </Router>
  );
}

export default App;