import React, { Suspense, lazy, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';

import Spinner from '../app/shared/Spinner';


const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const PublicRoutes = () =>{

    const authctx = useContext(AuthContext);
  
      return (
        
        <Suspense fallback={<Spinner/>}>
          
          
          <Switch>

              <Route path="/user-pages/login-1" component={ Login } />
            <Route path="/user-pages/register-1" component={ Register1 } />

  
            <Route path="/error-pages/error-404" component={ Error404 } />
            <Route path="/error-pages/error-500" component={ Error500 } />
  
            

            { !authctx.isLoggedin &&  <Redirect to="/user-pages/login-1" />}
          </Switch> 
        </Suspense>
      );
    }
  
  
  export default PublicRoutes;