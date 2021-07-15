import { Route, Switch } from 'react-router-dom';
import '../Css/App.css';
import HomePage from './HomePageComponent/HomePage';
const hats=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact={true} path="/" component={HomePage}/>

      <Route exact={true} path="/hats" component={hats}/>
      </Switch>
    </div>
  );
}

export default App;
