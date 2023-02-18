import './App.css';
import Board from './components/Board';
import Footer from './components/Footer';
import Header from './components/Header';
import Pallete from './components/Pallete';

function App() {
  return (
    <div className="App">
      <Header />
      <Pallete />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
