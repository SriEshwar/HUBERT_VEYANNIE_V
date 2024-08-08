// App.js
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
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './Auth/AuthContext';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState("");

  const logout = () => {
    setUser("")
  }

  return (
    <div className="App d-flex flex-column min-vh-100">
      <AuthProvider>
        <Router>
          <Content cartItems={cartItems} setCartItems={setCartItems} user={user} setUser={setUser} logout={logout} />
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

function Content({ cartItems, setCartItems, user, setUser, logout }) {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className="flex-grow-1">
      <ToastContainer theme='dark' autoClose={1000} />
      {!hideHeader && <Header cartItems={cartItems} user={user} logout={logout}/>}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails cartItems={cartItems} setCartItems={setCartItems} user={user}/>} />
        <Route path='/cart' element={<PrivateRoute><Cart cartItems={cartItems} setCartItems={setCartItems} /></PrivateRoute>} />
        <Route path='/login' element={<Login setUser={setUser} />} />
        <Route path='/signup' element={<Signup setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
