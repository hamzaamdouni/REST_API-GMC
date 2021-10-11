import { Route, Switch } from 'react-router';
import './App.css';
import AddPerson from './Pages/AddPerson';
import PersonList from './Pages/PersontList';
import Home from './Pages/Home';
import Error from './Pages/Error';
import NavBar from './Component/NavBar/NavBar';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/persons' component={PersonList} />
        <Route path='/addperson' component={AddPerson} />
        <Route path='/*' component={Error} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
