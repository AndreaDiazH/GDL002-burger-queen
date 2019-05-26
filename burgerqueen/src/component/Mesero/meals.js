import React from 'react';
import firebase from '../Firebase/firebase';

class Meals extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        order: [],
        menu: [],
        bebida: [],
        extra: []
      };
      this.ref4 = firebase.firestore().collection('comidas');
      this.ref5 = firebase.firestore().collection('comidaBebida');
      this.ref6 = firebase.firestore().collection('comidaExtra');

    }

bringMeals = (querySnapshot) => {
  const food = [];
  querySnapshot.forEach((doc) => {
    const {dish,price,img} = doc.data();
    food.push({
      dish,
      price,
      img,
    });
  });
  this.setState({
    menu:food,
    
  });
}

bringDrinks = (querySnapshot) => {
  const drink = [];
  querySnapshot.forEach((doc) => {
    const {dish,price,img} = doc.data();
    drink.push({
      dish,
      price,
      img,
    });
  });
  this.setState({
    bebida:drink
  });
}

bringExtrasMeal= (querySnapshot) => {
  const extras = [];
  querySnapshot.forEach((doc) => {
    const {dish,price,img} = doc.data();
    extras.push({
      dish,
      price,
      img,
    });
  });
  this.setState({
    extra:extras,
  });
}

componentDidMount() {
  this.ref6.onSnapshot(this.bringExtrasMeal);
  this.ref5.onSnapshot(this.bringDrinks);
  this.ref4.onSnapshot(this.bringMeals);
   
} 

render() {
  return(
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <h3>Platillos</h3>
          <div className= 'row'>
          {this.state.menu.map(mnus => 
            <div>
              <img src= {require ('../../png-icons/'+ mnus.img)} alt='gato' className= "imgSize"></img>
              <p>{mnus.dish}</p>
              <p>${mnus.price}</p>
            </div>
              )}
          </div> 
          <h3>Bebidas</h3>
          <div className= 'row'>
          {this.state.bebida.map(drk => 
            <div>
              <img src= {require ('../../png-icons/'+ drk.img)} alt='gato' className= "imgSize"></img>
              <p>{drk.dish}</p>
              <p>${drk.price}</p>
            </div>
              )}
          </div>
          <h3>Extras</h3>
          <div className= 'row'>
          {this.state.extra.map(xtr => 
              <div>
              <img src= {require ('../../png-icons/'+ xtr.img)} alt='gato' className= "imgSize"></img>
              <p>{xtr.dish}</p>
              <p>${xtr.price}</p>
            </div>
              )}
            </div>
        </div>
    
  );
 }
} 



export default Meals; 
