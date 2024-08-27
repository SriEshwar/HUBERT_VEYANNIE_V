import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import PrivateRoute from './Auth/PrivateRoute';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import ProductDetails from './pages/ProductDetails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Auth/AuthContext';

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <AuthProvider>
        <Router>
          <Content />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

function Content() {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex-grow-1">
      <ToastContainer theme='dark' autoClose={1000} />
      {!hideHeader && <Header />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/cart' element={<PrivateRoute><Cart /></PrivateRoute>} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
