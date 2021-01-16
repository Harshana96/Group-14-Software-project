import React, { Component, Fragment } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import signup from './components/signup';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'




class App extends Component {
 

    render() {
        return ( 

        <Router>
            
            <Fragment>
            <Navbar/>
            
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/signup' component={signup}/>
                <Route exact path='/Login' component={Login}/>
            </Switch>
            
            </Fragment>
        </Router>
               
        
         );
    }
}

export default App;