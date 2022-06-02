import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Components/statics/navbar/Navbar';
import Home from './Components/pages/home/Home'
import Footer from './Components/statics/footer/Footer'
import Login from './Components/pages/login/Login';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/login'>
            <Login/>
          </Route>
        </Switch>
      </div>
        <Footer />
    </Router>
  );
}
export default App;
