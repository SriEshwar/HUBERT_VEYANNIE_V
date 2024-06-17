import Home from './Components/Home'
import Contactus from './Components/Contactus';
import Products from './Components/Products';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import UpdatingDemo from './UpdatingDemo';
import Hook from './Hook';
import './App.css';
import { Login } from './login';
import { ControlForm } from './ControlForm';


function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      {/* <BrowserRouter>
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
      </BrowserRouter> */}
      {/* <UpdatingDemo /> */}
      {/* <Hook /> */}
      {/* <Login /> */}
      <ControlForm />
    </div>
  );
}

export default App;
