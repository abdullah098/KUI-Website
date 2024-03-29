import './App.scss';
import { Switch, Route, Redirect } from 'react-router';
import Navbar from './Layouts/Navbar';
import Dashboard from './Pages/Dashboard/index';
import StudyingStudents from './Pages/StudyingStudents/index';
import GraduateStudents from './Pages/GraduateStudents/index';
import AcademicCalendar from './Pages/AcademicCalendar/index';
import StudentInfoAndGrading from './Pages/StudentInfoGrading/index';

import Login from './Pages/Auth/login';
import PrivateRoute from './Routes/PrivateRoute';



function App() {
  return (
    <>


      <Switch>
        <Route exact path='/' component={Login} />

        <PrivateRoute >
          <Navbar />
          <main>
            {/* <Switch> */}


              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/studying-students" component={StudyingStudents} />
              <Route exact path="/graduate-students" component={GraduateStudents} />
              <Route exact path="/academic-calender" component={AcademicCalendar} />
              <Route exact path="/studying-students/:id" component={StudentInfoAndGrading} />

              {/* <Redirect exact from="/" to="/dashboard" component={Dashboard} /> */}
            {/* </Switch> */}
          </main>
        </PrivateRoute>


      </Switch>

      


    </>
  );
}

export default App;
