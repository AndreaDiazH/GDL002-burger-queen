import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import Cocina from '../Cocina';
import Mesero from '../Mesero';


import * as ROUTES from '../../constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation /> <hr />
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.COCINA} component={Cocina} />
      <Route path={ROUTES.MESERO} component={Mesero} />
    </div>
  </Router>
);
export default App;