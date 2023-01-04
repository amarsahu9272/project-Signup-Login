// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home';
import Navbar from './Navbar';
import About from './about/About';
import LogIn from './login/LogIn';
import Register from './register/Register';
// import { RecoilRoot } from 'recoil';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/About' element={<About />} />
        <Route path='/login/LogIn' element={<LogIn />} />
        <Route path='/register/Register' element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
