//Pages
import AboutUs from "./pages/AboutUs";
import Nav from "./components/Nav";
import GlobalStyle from './components/GlobalStyle';
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import MovieDetail from "./pages/MovieDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route exact path="/" element={<AboutUs />} />
        <Route exact path="work" element={<OurWork />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="work/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
