import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Browse from './pages/Browse';
import PostRequirement from './pages/PostRequirement';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Admin from './pages/Admin';

function App() {
  return (
    <div>
      <nav style={{padding: '10px', background: '#f8f8f8'}}>
        <Link to='/'>Home</Link> |{" "}
        <Link to='/browse'>Browse</Link> |{" "}
        <Link to='/post'>Post Requirement</Link> |{" "}
        <Link to='/login'>Login</Link> |{" "}
        <Link to='/signup'>Signup</Link> |{" "}
        <Link to='/admin'>Admin</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse' element={<Browse />} />
        <Route path='/post' element={<PostRequirement />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/admin' element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;