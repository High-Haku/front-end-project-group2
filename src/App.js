import Navbar from './components/navbar';
import Footer from './components/footer';
import Main from './Main.js';
import { Routes, Route} from 'react-route';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
