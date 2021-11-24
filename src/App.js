import './App.scss';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './Layouts/Navbar';
import Dashboard from './Pages/Dashboard/index';
import StudyingStudents from './Pages/StudyingStudents/index';



function App() {
  return (
    <>

      <Navbar />


      <main>
        <Switch>
          
          
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/studying-students" component={StudyingStudents} />

          <Redirect exact from="/" to="/dashboard"  component={Dashboard}/>
        </Switch>
      </main>


    </>
  );
}

export default App;
