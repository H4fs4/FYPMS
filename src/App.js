import './App.css';
import Login from './pages/Login';
import MainLayout from './Layout/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Users from './components/Users';



function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' Component={Dashboard}/>
    <Route path='/users' Component={Users}/>
    <Route path='/projects' Component={Projects}/>
    <Route path='/logout' Component={Login}/>
    </Routes>
    </BrowserRouter>

  );
}

export default App;