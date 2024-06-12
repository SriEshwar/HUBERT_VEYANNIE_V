import Home from './Components/Home'
import Contactus from './Components/Contactus';
import Products from './Components/Products';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <BrowserRouter>
      <ul>
        <li><Link to='/'>Homme</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/products'>Products</Link></li>
      </ul>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contactus />}></Route>
        <Route path='/products' element={<Products />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
