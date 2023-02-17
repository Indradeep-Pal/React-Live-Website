import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Service from './Service';
import Navbar1 from './Navbar1';
function App() {
  return (
    <BrowserRouter>
      <Navbar1 />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="*" element={<h1>Error 404 : Page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
