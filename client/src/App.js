import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Map} from './components/Map.js';
import {Login} from './components/Login.js';
import {Signup} from './components/Signup.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route path='/' exact />
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/map'>
          <Map/>
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
      </Switch>
    </BrowserRouter>
    

  );
}

export default App;
