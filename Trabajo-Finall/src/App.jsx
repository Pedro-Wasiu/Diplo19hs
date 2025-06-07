import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import ProductDetail from './pages/productDetail/ProductDetail';
import CreateProductScreen from './Screens/CreateProductScreen/CreateProductScreen';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App() {
  return (
    <>
      <Navbar />
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/crear-producto" element={<CreateProductScreen />} />
      </Routes>
    </>
  );
}

export default App;
