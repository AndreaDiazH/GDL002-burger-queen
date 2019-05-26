import React from 'react';
import firebase from '../Firebase/firebase';

class Breakfast extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          order: [],
          menus: [],
          bebidas: [],
          extras: []
        };
        this.ref = firebase.firestore().collection('desayunos');
        this.ref2 = firebase.firestore().collection('desayunoBebida');
        this.ref3 = firebase.firestore().collection('desayunoExtra');
  
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
      menus:foods,
      
    });
  }
  
  bringBreakfastDrinks = (querySnapshot) => {
    const drinks = [];
    querySnapshot.forEach((doc) => {
      const {dish,price,img} = doc.data();
      drinks.push({
        dish,
        price,
        img,
      });
    });
    this.setState({
      bebidas:drinks
    });
  }
  
  bringExtras= (querySnapshot) => {
    const extra = [];
    querySnapshot.forEach((doc) => {
      const {dish,price,img} = doc.data();
      extra.push({
        dish,
        price,
        img,
      });
    });
    this.setState({
      extras:extra,
    });
  }

  componentDidMount() {
    this.ref3.onSnapshot(this.bringExtras);
    this.ref2.onSnapshot(this.bringBreakfastDrinks);
    this.ref.onSnapshot(this.bringBreakfast);
    
  } 
  render () {
      return (
        
          <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  
            <h3>Platillos</h3>
            <div className= 'row'>
              {this.state.menus.map(mnu => 
              <div>
                <img src= {require ('../../png-icons/'+ mnu.img)} alt='gato' className= "imgSize"></img>
                <p>{mnu.dish}</p>
                <p>${mnu.price}</p>
              </div>
                )}
              </div>
            <h3>Bebidas</h3>
            <div className= 'row'>
            {this.state.bebidas.map(drks => 
              <div>
                <img src= {require ('../../png-icons/'+ drks.img)} alt='gato' className= "imgSize"></img>
                <p>{drks.dish}</p>
                <p>${drks.price}</p>
              </div>
                )}
              </div>
            <h3>Extras</h3>
            <div className= 'row'>
            {this.state.extras.map(xtrs => 
              <div>
                <img src= {require ('../../png-icons/'+ xtrs.img)} alt='gato' className= "imgSize"></img>
                <p>{xtrs.dish}</p>
                <p>${xtrs.price}</p>
              </div>
                )}
              </div>
          </div>  
        
            
          
      )
  }
}

export default Breakfast;