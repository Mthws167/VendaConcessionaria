import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Venda from './pages/crud-venda/Venda';

function App() {
  return (
    <Router>
      <div className='Container'>
        <Header/>
        <Venda/>     
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
