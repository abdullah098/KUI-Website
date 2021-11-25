import './App.scss';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './Layouts/Navbar';
import Dashboard from './Pages/Dashboard/index';
import StudyingStudents from './Pages/StudyingStudents/index';
import GraduateStudents from './Pages/GraduateStudents/index';



function App() {
  return (
    <>

      <Navbar />


      <main>
        <Switch>
          
          
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/studying-students" component={StudyingStudents} />
          <Route exact path="/graduate-students" component={GraduateStudents} />

          <Redirect exact from="/" to="/dashboard"  component={Dashboard}/>
        </Switch>
      </main>


    </>
  );
}

export default App;
