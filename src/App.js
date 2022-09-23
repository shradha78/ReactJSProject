import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import { Route, Routes } from 'react-router-dom';
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import MainNavigation from './Component/MainNavigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
      <Route path="/" element = {<Home/>}/> 
       <Route path="/login" element = {<Login/>}>
       <Route path = "/login/mainNavi" element = {<MainNavigation/>}></Route>
       </Route>
      <Route path="/signup" element = {<SignUp/>}/> 
    </Routes> 
      </header>
    </div>
  );
}

export default App;
