import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel'
import CallToAction from './components/call_to_action';
import EventInfo from './components/event_Info';
import Contact from './components/contact';
import Footer from './components/footer';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <CallToAction />
      <EventInfo />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
