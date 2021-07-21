import { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../Css/App.css';
import { auth } from './firebase/firebase.utils';
import Header from './HeaderComp/Header';
import HomePage from './HomePageComponent/HomePage';
import ShopPage from './ShopeComponent/ShopPage';
import User from './UserAuthenticationComponent/User';

function App() {
  const [Person, setPerson] = useState();
  useEffect(() => {
    const unlist= auth.onAuthStateChanged(user=>{ setPerson(user)});
    return()=>{
      unlist();
    }
  }, [])
  return (
    <div className="App">
      <Header currUser={Person}/>
      <Switch>
      <Route exact={true} path="/" component={HomePage}/>

      {/* <Route exact={true} path="/hats" component={hats}/> */}
      <Route exact={true} path="/shop" component={ShopPage}/>
      <Route exact={true} path="/SignIn" component={User}/>
      </Switch>
    </div>
  );
}

export default App;
