import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () => (
  <div>
      <h1>Your Restaurant Name</h1>
        <button className="btn btn-light btn-lg btn-block col-4">
          <Link to={ROUTES.MESERO}>Mesero</Link>
        </button>
        <button className="btn btn-dark btn-lg btn-block col-4">
          <Link to={ROUTES.COCINA}>Cocina</Link>
        </button>
          <Link to={ROUTES.LANDING}>Volver al inicio</Link>
  </div>
);

export default Navigation 