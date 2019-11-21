import React, { Component } from 'react';
import Navbar from "./layaut/Navbar";
import UpdateCustomer from "./forms/UpdateCustomer";
import Customers from "./components/Customers";


import './App.css';
import NotFound from "./pages/NotFound";
import {BrowserRouter as Router ,Route,Switch} from "react-router-dom";
import Contribute from './pages/Contribute';
import AddCustomer from './forms/AddCustomer';


  

class App extends Component {
  
  
  render() {
    return (
      
      <Router>
        
       <div className="container">

       <Navbar title = "customer app"/>
     
    <hr/>
  

    <Switch>
    <Route exact path ="/" component={Customers}/>
    
    <Route exact path ="/add" component={AddCustomer}/>
   
    <Route exact path ="/github" component={Contribute}/>
    <Route exact path ="/edit/:id" component={UpdateCustomer}/>
   
   <Route  component={NotFound}/>

    
    </Switch>
    
       </div>
       
      </Router>
    );
  }
}

export default App;
