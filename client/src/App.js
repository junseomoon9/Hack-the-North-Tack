import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './components/landing.js';
import Login from './components/login.js';
import Signup from './components/signup.js';


function App() {
  return (
    <Switch>
      <Route path='/' component={Landing} exact />
      <Route path='/signup' component={Signup} />
      <Route path='/login' component={Login} />
      <Route component={Error}/>
    </Switch>
  );
}

export default App;
