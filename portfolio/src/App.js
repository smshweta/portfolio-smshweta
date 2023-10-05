import './App.css';
import About from './components/about';
import Home from './components/home';
import Navbar from './components/navbar';
import Skills from './components/skills';
import Work from './components/work';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />

    </div>
  );
}

export default App;
