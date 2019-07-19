import React from 'react';
import firebase from '../Firebase/firebase';


class Order extends React.Component {
   pruebaOrden = [];

   constructor(props){
        super(props);
        this.state = {
            orden: this.pruebaOrden,
            total: 0,
        };
        this.clientName = React.createRef();
        this.notesChef = React.createRef();
    }
   agrega = (name,value) =>{
        this.pruebaOrden.push({
            platillo: name,
            costo: value
        });
        this.setState({
            orden: this.pruebaOrden,
            total: this.state.total + parseInt(value)
        });
    }

   quitElement = (move) => {
    
        let indexOrder = this.pruebaOrden.indexOf(move);
        if (indexOrder !== -1) {
          let finalValue = parseInt(move.costo); 
          this.pruebaOrden.splice(indexOrder, 1);
          this.setState({
            orden: this.pruebaOrden, 
            total: this.state.total - finalValue});
        }
      }

   createOrder = () => {
        let o = this.state.orden;
        let t = this.state.total;
        firebase.firestore().collection("comanda").add({
            name: this.clientName.current.value,
            lista: o,
            total: t,
            notas: this.notesChef.current.value,
            alta: firebase.firestore.FieldValue.serverTimestamp(),
            terminada: null,
            notifyOrder: null
        });
        this.pruebaOrden = [];
        this.setState({
            orden: this.pruebaOrden,
            total: 0
        });
        this.clientName.current.value = "";
        this.notesChef.current.value = "";
        alert('La orden ha sido enviada a cocina, gracias!');
    }

   render() {
        return(
            <div>
            <div>
            <ul className="list-group list-group-flush">
                <textarea placeholder="Nombre del cliente" id="clientName" ref = { this.clientName }></textarea>
                {this.state.orden.map(newRow =>
                    <li className="list-group-item">{newRow.platillo}--{newRow.costo}
                        <button className= "btn btn-danger btn-sm btn-block col-1 ml-auto" onClick={() =>{this.quitElement(newRow)}}>X</button>
                    </li>
                )}
                <li className="list-group-item"><label>Total: </label>{this.state.total}</li>
                <textarea placeholder="Notas" id= "notesForKitchen" ref = { this.notesChef }></textarea>
                <button id= "btnSendOrder" className="btn btn-info btn-lg btn-block col-4" onClick={this.createOrder}>Enviar a Cocina</button>
            </ul>
            </div>
            </div>
            
            
        )
    }
}


export default Order;
