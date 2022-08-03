import './App.css';
import Header from './components/Header';
import HouseSearch from './components/HouseSearch';
import HouseForm from './components/HouseForm'
import { Switch, Route } from "react-router-dom"
import HouseProject from './views/HouseProject';
import Home from './views/Home';

function App() {

  return (
    <div className="App">
      <div className='container'>

        <Header />
        <Switch>
        <div className='other-houses'>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home/:id">
            <HouseProject />
          </Route>
        </div>
        </Switch>
      </div>
    </div>
  );
}

export default App;
