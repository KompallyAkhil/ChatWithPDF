import './App.css';
import Navigation from './Components/Navigation';
import { Route,Routes } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import About from './Pages/About';
import RegisterForm from './Pages/RegisterForm';
import Bot from './Pages/Chatbot';
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Register' element={<RegisterForm/>}></Route>
      <Route path='/Bot' element={<Bot/>}></Route>
    </Routes>
  
    </>
  );
}

export default App;
