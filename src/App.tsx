import Dashboard from "./pages/Dashboard/Dashboard";
import SignIn from "./pages/signIn/SignIn";
import UserDetails from "./pages/userDetails/UserDetails";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>  

        <Route exact path= "/">
        <SignIn/>
      </Route>

      <Route exact path = '/user-details'>
        <UserDetails/>
      </Route>

      <Route exact path = '/user-list'>
        <Dashboard/>
      </Route>

      </Switch>
      </Router>
  
    </div>
  );
}

export default App;
