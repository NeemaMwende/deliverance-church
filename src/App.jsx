import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Contact from './components/Contact'
import VideoCarousel from './components/VideoCarousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <VideoCarousel />
      <Contact />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
