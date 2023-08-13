import { Route, Routes } from 'react-router-dom';
import Cart from './component/Product Cart/Cart';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Product from './component/Product Categorys/AllProduct';
import Login from './component/Login Page/Login';
import SignUp from './component/Signup Page/SignUp';
import ProductDetails from './component/Product Details/ProductDetails';


function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Product />}/>
        <Route path='/product-details/:id' element={<ProductDetails />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/singup' element={<SignUp />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
