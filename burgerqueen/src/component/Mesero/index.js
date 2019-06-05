import React from 'react';
import Meals from './meals';
import Breakfast from './breakfast';
import Order from './order';
import firebase from '../Firebase/firebase';

class Mesero extends React.Component{
  constructor(props){
    super(props);
    this.selectItem = this.selectItem.bind(this);
    this.refOrder = React.createRef();
    this.ref = firebase.firestore().collection('comanda');
  }
  
  selectItem (name,value){
    this.refOrder.current.agrega(name, value);
  }


  alertWaiter = (querySnapshot) => {
    if(!querySnapshot.metadata.hasPendingWrites){
      querySnapshot.forEach(doc => {
        if (doc.data().terminada !== null && doc.data().notifyOrder === null){
          alert('El pedido de '+ doc.data().name + ' esta listo');
          this.orderFinished(doc.id);
      }
      });
    }
  }

    componentDidMount() {
      this.ref.onSnapshot(this.alertWaiter);
    }

    orderFinished = (id) => {
      let finished = firebase.firestore().collection('comanda').doc(id)
        return finished
         .update({
          notifyOrder: firebase.firestore.FieldValue.serverTimestamp()
         })
  
    }


render() {
  return(
    <div className= "row">
      <div className= "col-md-6">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Desayunos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Comidas</a>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <Breakfast handler= {this.selectItem} />
          <Meals handler= {this.selectItem} />  
        </div>
      </div>
      <div className= "col-md-6">
        <Order ref= {this.refOrder} />
      </div>
      <div>Icons made by <a href="https://www.freepik.com/?__hstc=57440181.24f021912508111b1455700b006b9f83.1557765425686.1557765425686.1558324202783.2&__hssc=57440181.5.1558324202783&__hsfp=3341653422" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 		    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 		    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
  );
 }
} 

export default Mesero; 
