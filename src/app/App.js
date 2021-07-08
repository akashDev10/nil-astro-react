import React, {  useContext } from 'react';
import { withRouter,useHistory } from 'react-router-dom';
import './App.scss';
import AppRoutes from './AppRoutes';
import PublicRoutes from './PublicRoutes';
import Navbar from './shared/Navbar';
import Sidebar from './shared/Sidebar';
import SettingsPanel from './shared/SettingsPanel';
import Footer from './shared/Footer';
import AuthContext from './store/auth-context';


const App = () => {

 // const [isFullPageLayout,setIsFullPageLayout] = useState('');

 // const location = useLocation();

  const history = useHistory();

  const authctx = useContext(AuthContext);

//   useEffect(() => {
//     onRouteChanged();
//     }, [location]);


//   const onRouteChanged = () => {
//     console.log("ROUTE CHANGED");
//     window.scrollTo(0, 0);
//     const fullPageLayoutRoutes = ['/user-pages/login-1', '/user-pages/register-1', '/user-pages/lockscreen', '/error-pages/error-404', '/error-pages/error-500', '/general-pages/landing-page'];

//     fullPageLayoutRoutes.forEach(data => {
//         if(location.pathname === data){
//           setIsFullPageLayout(true);
//         document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');

//         } else {
//           setIsFullPageLayout(false);
//           document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
//         }   });
//  }
 
    let navbarComponent = <Navbar/> 
    let sidebarComponent = <Sidebar/> 
    let SettingsPanelComponent = <SettingsPanel/> 
    let footerComponent = <Footer/> 

    return (
      <>
     { authctx.isLoggedin &&
        <div className="container-scroller">
        { navbarComponent }
        <div className="container-fluid page-body-wrapper">
          {sidebarComponent }
          <div className="main-panel">
            <div className="content-wrapper">
                <AppRoutes/>
              { SettingsPanelComponent }
            </div>
            { footerComponent }
          </div>
        </div>
      </div>}
      { !authctx.isLoggedin &&  <PublicRoutes/> }
    </>

    );
}

export default (withRouter(App));
