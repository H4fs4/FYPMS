import './App.css';
import Login from './pages/Login';
import MainLayout from './Layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' Component={MainLayout}/>
    <Route path='/home' Component={MainLayout}/>
    <Route path='/logout' Component={Login}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;
