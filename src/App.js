import {BrowserRouter, Route, Switch,Link} from 'react-router-dom'
import React, {useEffect , useState} from 'react'
import SignUp from './components/auth/signup'
import SignIn from './components/auth/signin'
import './App.css';
import Home from './components/home/home'
import {Container,Typography,AppBar,Grow, Grid} from '@material-ui/core'
import Navbar from './components/navbar/navbar';
import Singlepost from './components/postdetail/postdetail'
function App() {

  return (
    <div className="App">
     <Container maxidth='lg'>
      
       <BrowserRouter>
       <Navbar/>
       <Route exact path='/'><Home></Home></Route>
       <Route exact path='/signup'><SignUp></SignUp></Route>
       <Route exact path='/signin'><SignIn></SignIn></Route>
       <Route exact path='/posts/:id'><Singlepost/></Route>
     
       </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
