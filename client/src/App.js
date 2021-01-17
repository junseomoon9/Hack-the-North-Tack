import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {Login} from './components/Login.js';
import {Signup} from './components/Signup.js';

import './App.css';
import { Frontpage } from './components/Frontpage.js';
import { GlobalProvider } from "./components/context/GlobalContext";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/frontpage">
            <Frontpage />
          </Route>
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
