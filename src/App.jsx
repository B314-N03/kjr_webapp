import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import PrivateRoute from './privateRoute';
import Home from './components/home';
import Login from './components/login';
import { Fragment } from 'react';


function App() {
  return (
    
          <Routes>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path="/home" element={<PrivateRoute></PrivateRoute>}>
              <Route path="/home" element={<Home></Home>} />
            </Route>
          </Routes> 
    );
}

export default App;
