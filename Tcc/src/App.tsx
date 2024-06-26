import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import './Css/index.css'
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.always.css'; 
import '@ionic/react/css/palettes/dark.class.css'; 
import '@ionic/react/css/palettes/dark.system.css';
import './Css/variables.css';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import UltTrans from './pages/UltTrans';
import Profile from './pages/profile';
import Invest from './pages/Invest';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/splash">
          <SplashScreen/>
        </Route>
        <Route exact path="/home">
          <Home/>
        </Route>
        <Route exact path="/login">
          <Login/>
          </Route>
        <Route exact path="/Registrar">
          <Registrar/>
        </Route>
        <Route exact path="/UltTrans">
          <UltTrans/>
        </Route>
        <Route exact path="/Profile">
          <Profile/>
        </Route>
        <Route exact path="/Invest">
          <Invest/>
        </Route>
        <Route exact path="/">
          <Redirect to="/splash" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;