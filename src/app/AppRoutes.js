import React, { Suspense, lazy, useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthContext from './store/auth-context';

import Spinner from '../app/shared/Spinner';


const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Buttons = lazy(() => import('./basic-ui/Buttons'));
const Dropdowns = lazy(() => import('./basic-ui/Dropdowns'));
const Typography = lazy(() => import('./basic-ui/Typography'));


const BasicElements = lazy(() => import('./form-elements/BasicElements'));

const BasicTable = lazy(() => import('./tables/BasicTable'));


const Mdi = lazy(() => import('./icons/Mdi'));


const ChartJs = lazy(() => import('./charts/ChartJs'));

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const Lockscreen = lazy(() => import('./user-pages/Lockscreen'));

const BlankPage = lazy(() => import('./general-pages/BlankPage'));

const FirstPage = lazy(() => import('./App-Ui/FirstPage'));
const HoraryChartCalculationInterActiveUi = lazy(() => import('./App-Ui/HoraryChartCalculationInterActiveUi'));
const HouseDetailsInput = lazy(() => import('./App-Ui/HouseDetailsInput'));
const PlanetDetailsInput = lazy(() => import('./App-Ui/PlanetDetailsInput'));
const HoraryChartCalculationFile = lazy(() => import('./App-Ui/HoraryChartCalculationFile'));






const AppRoutes = () =>{

  const authctx = useContext(AuthContext);

    return (
      
      <Suspense fallback={<Spinner/>}>
        
        
        <Switch>
        { authctx.isLoggedin &&  <Route exact path="/dashboard" component={ Dashboard } /> }


        { authctx.isLoggedin &&  <Route path="/basic-ui/buttons" component={ Buttons } /> }

          { authctx.isLoggedin && <Route path="/basic-ui/dropdowns" component={ Dropdowns } />}
          { authctx.isLoggedin && <Route path="/basic-ui/typography" component={ Typography } />}


          { authctx.isLoggedin && <Route path="/form-Elements/basic-elements" component={ BasicElements } />}

          { authctx.isLoggedin && <Route path="/tables/basic-table" component={ BasicTable } />}


          { authctx.isLoggedin && <Route path="/icons/mdi" component={ Mdi } />}


          { authctx.isLoggedin && <Route path="/charts/chart-js" component={ ChartJs } />}


            <Route path="/user-pages/login-1" component={ Login } />
          { !authctx.isLoggedin && <Route path="/user-pages/register-1" component={ Register1 } />}
          { authctx.isLoggedin && <Route path="/user-pages/lockscreen" component={ Lockscreen } />}

          { authctx.isLoggedin && <Route path="/error-pages/error-404" component={ Error404 } />}
          { authctx.isLoggedin && <Route path="/error-pages/error-500" component={ Error500 } />}

          { authctx.isLoggedin && <Route path="/general-pages/blank-page" component={ BlankPage } />}

          { authctx.isLoggedin && <Route path="/general-pages/home" component={ FirstPage } />}

           { authctx.isLoggedin && <Route path="/horary-calculation/interactive" component={ HoraryChartCalculationInterActiveUi } />}
          { authctx.isLoggedin && <Route path="/horary-calculation/HouseDetailsInput" component={ HouseDetailsInput } />}
          { authctx.isLoggedin && <Route path="/horary-calculation/PlanetDetailsInput" component={ PlanetDetailsInput } />}

          { authctx.isLoggedin && <Route path="/horary-calculation/HoraryChartCalculationFile" component={ HoraryChartCalculationFile } />}

          <Redirect to="/dashboard" />
        </Switch> 
      </Suspense>
    );
  }


export default AppRoutes;