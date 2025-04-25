import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import ProductsDetails from './pages/ProductsDetails';
import Navbar from './assets/components/Navbar';
import { Provider } from 'react-redux';
import { store } from './App/Store';
import Login from './pages/Login';

const AppContent = () => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/login';

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path='/product/:id' element={<ProductsDetails/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </>
  );
};

const App = () => { 
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </Provider>
  );
}

export default App
