import React from 'react';
import firebase from '../Firebase/firebase';


class Mesero extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        order: [],
        menus: []
      };
      this.ref = firebase.firestore().collection('desayunos');
    }

bringBreakfast = (querySnapshot) => {
  const foods = [];
  querySnapshot.forEach((doc) => {
    const {dish,price,img} = doc.data();
    foods.push({
      dish,
      price,
      img,
    });
  });
  this.setState({
    menus:foods
  });
}


componentDidMount() {
  this.unsuscribe = this.ref.onSnapshot(this.bringBreakfast);
} 

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
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

          <h3>Platillos</h3>
            {this.state.menus.map(mnu => 
            <div>
              <p>{mnu.dish}</p>
              <p>{mnu.price}</p>
              <img src= {require ('../../png-icons/'+ mnu.img)} alt='gato'></img>>
            </div>
              )}
            
          <h3>Bebidas</h3>
      
          <h3>Extras</h3>
        
        </div>  
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <h3>Platillos</h3>
          
          <h3>Bebidas</h3>
          
          <h3>Extras</h3>
          
        </div>
      </div>
    </div>
  );
 }
} 



export default Mesero; 
