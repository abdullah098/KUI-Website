import {Route, Redirect} from "react-router-dom";
import {useUserContext} from "../Context/UserContext";

const PrivateRoute = ({component: Component, ...rest}) => {
  const {isLogin} = useUserContext();
  console.log(isLogin());
  return (
    <>
      {isLogin() ? (
        
        <Route {...rest} render={(props) => <Component {...props} />} />
      ) : (
        <Redirect to='/' />
      )}
    </>
  );
};

export default PrivateRoute;
