import { Routes, Route } from 'react-router-dom'; // No BrowserRouter here
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import CreateProductScreen from './Screens/CreateProductScreen/CreateProductScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/crear-producto" element={<CreateProductScreen />} />
    </Routes>
  );
}

export default App;
