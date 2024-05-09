
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Lead, Login } from './pages';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='lead' element={<Lead/>}/>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
