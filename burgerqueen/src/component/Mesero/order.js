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

   createOrder = () => {
        let o = this.state.orden;
        let t = this.state.total;
        firebase.firestore().collection("comanda").add({
            name: this.clientName.current.value,
            lista: o,
            total: t,
            notas: this.notesChef.current.value
        });
        this.pruebaOrden = [];
        this.setState({
            orden: this.pruebaOrden,
            total: 0
        });
        this.clientName.current.value = "";
        this.notesChef.current.value = "";
    }
    render() {
        return(
            <div>
            <div>
            <ul className="list-group list-group-flush">
                <textarea placeholder="Nombre del cliente" id="clientName" ref = { this.clientName }></textarea>
                {this.state.orden.map(newRow =>
                    <li className="list-group-item">{newRow.platillo}--{newRow.costo}</li>
                )}
                <li className="list-group-item"><label>Total:</label>{this.state.total}</li>
                <textarea placeholder="Notas" id= "notesForKitchen" ref = { this.notesChef }></textarea>
                <button className="btn btn-info btn-lg btn-block col-4" onClick={this.createOrder}>Enviar a Cocina</button>
            </ul>
            </div>
            </div>
            
            
        )
    }
}


export default Order;
