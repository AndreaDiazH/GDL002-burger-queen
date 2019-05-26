import React from 'react';
import Meals from './meals';
import Breakfast from './breakfast';

class Mesero extends React.Component{
  
render() {
  return(
    
      <div>
      
      <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item">
         <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Desayunos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Comidas</a>
      </li>
      </ul>
      <div className="tab-content" id="myTabContent">
      <Breakfast />
      <Meals />
      </div>
    </div>
  );
 }
} 



export default Mesero; 
