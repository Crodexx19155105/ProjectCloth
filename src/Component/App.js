import { Route, Switch } from 'react-router-dom';
import '../Css/App.css';
import Header from './HeaderComp/Header';
import HomePage from './HomePageComponent/HomePage';
import ShopPage from './ShopeComponent/ShopPage';
const hats=()=>(
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact={true} path="/" component={HomePage}/>

      <Route exact={true} path="/hats" component={hats}/>
      <Route exact={true} path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
