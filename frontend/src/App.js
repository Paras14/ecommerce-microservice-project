import './App.css';
import Home from './Components/Pages/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/UiComponents/Navbar';
import ProductPageDetails from './Components/Pages/ProductPageDetails';
import OrdersPage from './Components/Pages/OrdersPage';
import LoginPage from './Components/Pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='mx-auto max-w-screen-xl px-4 py-2 max-h-screen'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/order' element={<OrdersPage/>}/>
          <Route path='/product/:productId' element={<ProductPageDetails/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
