
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/signup';

function App() {
  return (
    <div className="App">
    {/* <Home /> */}
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="Home" element={<Home />}/>
      <Route path="login" element={<Login />}/>
        
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
