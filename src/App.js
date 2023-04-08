import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hom from './Components/Home';
import About from './Components/About';
import Road from './Components/RoadMap';
import Buy from './Components/Buy';
import Gall from './Components/Gallery';
import Footer from './Components/Footer';
import {Link } from "react-scroll";
import Form from './Components/Form';

function App() {
  return (
    <div className="Ap">
      <Navbar />
      <Hom/>
      <About />
      <Road />
      <Buy />
      <Gall />
      <Footer />
      {/* <Form /> */}
    </div>
  );
}

export default App;
