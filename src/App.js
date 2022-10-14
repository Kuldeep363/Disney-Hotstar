import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Details from './Components/Details';
import Header from './Components/Header/Header.component';
import Home from './Components/Home';
import Login from './Components/Login/Login.component';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='home' element={<Home/>} />
          <Route path='details/:id' element={<Details/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
