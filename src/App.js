import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './component/Cart/Cart';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Product from './component/Producs/Product';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/cart' element={<Cart />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
