import './App.css';
import Navbar from './components/Navbar';
import Bio from './components/Bio';
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Bio />
      <Contact />
      {/* <Hero /> */}
    </div>
  );
}

export default App;
