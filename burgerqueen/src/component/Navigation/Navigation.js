import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

class Navigation extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showLanding : true
    };
  }
  
  toggle = () => {
    this.setState({
      showLanding : (this.state.showLanding ? false : true)
    });
    
   //si da click en mesero/cocina entonces esconde el div//
  };

render () {
  return (
  <div>
    <div id= "appTitle">
      <h1>BurguerQueen</h1>
    </div>
    <div id="btnBegin">
      <div className= "navbtn" style={this.state.showLanding ? {}:{display:'none'}}>
        <Link to={ROUTES.MESERO}>
          <button id= "btnMesero" className="btn btn-info btn-lg btn-block col-4" onClick ={this.toggle}>Mesero</button>
        </Link>
        <Link to={ROUTES.COCINA}>
          <button id= "btnCocina" className="btn btn-secondary btn-lg btn-block col-4" onClick ={this.toggle}>Cocina</button>
        </Link> 
        </div>
      </div>
      <Link to={ROUTES.LANDING} onClick ={this.toggle}>Volver al inicio</Link>
  </div>
  );
}

}

export default Navigation 