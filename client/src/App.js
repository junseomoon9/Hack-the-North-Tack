import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Map} from './components/Map.js';
import {Login} from './components/Login.js'
import './App.css'

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
      </Switch>
    </BrowserRouter>
    

  );
}

export default App;
