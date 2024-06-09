import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Contact from './components/Contact'
import VideoCarousel from './components/VideoCarousel';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <VideoCarousel />
      <Events />
      <Contact />
      
      {/* <Hero /> */}
    </div>
  );
}

export default App;
