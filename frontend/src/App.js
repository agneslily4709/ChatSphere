import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import Chat from './Pages/Chat';
import Navbar from './Pages/Navbar';
import Profile from './Pages/Profile';
import Logout from "./Pages/Logout"
function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/' element={<Chat/>}/>
            <Route path='/profile' element= {<Profile/>}/>
            <Route path='/logout' element={<Logout/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
