import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css'
import './css/juice.css'
import Register from './Component/Register';
import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import Home from './Component/Home';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import LogIn from './Component/LogIn';
import ShopMain from './Component/ShopMain';
import UserDisplayData from './Component/UserDisplayData';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.Fragment>
    <Router>
      <Switch >
        <Route exact path='/'> 
        <Home></Home>
              
        </Route>
        <Route exact path='/Register'> 
              <Register></Register>
        </Route>
        <Route exact path='/ShopMain'> 
              <ShopMain></ShopMain>
        </Route>
        <Route exact path='/LogIn'> 
              <LogIn></LogIn>
        </Route>
        <Route exact path='/UserDisplayData'> 
              <UserDisplayData></UserDisplayData>
        </Route>
        
      </Switch>
    </Router>

  </React.Fragment>
);


