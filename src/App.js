//Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyle from './components/GlobalStyle';
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<AboutUs />} />
          <Route exact path="work" element={<OurWork />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="work/:id" element={<MovieDetail />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
