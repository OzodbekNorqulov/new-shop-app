import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { Link, Route, Routes } from 'react-router-dom';
import Product from './components/Product';
import Routers from './Routers';

function App() {

  
  return (
    <>
      <Header />
      <div className='content'>
      <Routes>
        <Route path='/product/:id' element={<Product />} />
        <Route path='/' element={<Routers />} />
  </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
