import './App.scss';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './Layouts/Navbar';
import Dashboard from './Pages/Dashboard/index';



function App() {
  return (
    <>

      <Navbar />


      <main>
        <Switch>
          
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/dashboard" component={Dashboard} />

          <Redirect exact from="/" to="/dashboard"  component={Dashboard}/>
        </Switch>
      </main>


    </>
  );
}

export default App;
