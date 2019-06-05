import React from 'react';
import firebase from '../Firebase/firebase';

class Cocina extends React.Component {
  orderList = [];

  constructor(props){
    super(props);
    this.state = {
      orders: this.orderList
    };
    this.ref = firebase.firestore().collection('comanda');
  }

  orderKitchen = (querySnapshot) => {
      querySnapshot.forEach(doc => {
        let newOrder = {
          list: doc.data().lista,
          customer: doc.data().name,
          notes: doc.data().notas
        };
        this.orderList.push(newOrder);
      });
      this.setState ({
        orders: this.orderList
      });
    }
    

  componentDidMount() {
    this.ref.onSnapshot(this.orderKitchen);
  }

  render() {
    return(
    <div>
      <h3>Pedidos</h3>
      <div className= "row">
        {this.state.orders.map(newOrder =>
        <div className="card col-4">
        <h5 className="card-header">{newOrder.customer}</h5>
         <div className="card-body">
        {newOrder.list.map(newDish=>
          <p className="card-text">{newDish.platillo}</p>
          )}
          <p className="card-text">{newOrder.notes}</p>
      <button className="btn btn-info">Terminada</button>
      </div>
      </div>
          )}
      </div>
      
    </div>
      )
  };

}

export default Cocina;
