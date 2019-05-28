import React from 'react';

const Cocina = () => (
  <div>
    <h3>Pedidos</h3>
      <div className="card col-4">
        <h5 className="card-header">Aquí"nombre del cliente"</h5>
      <div className="card-body">
        <h5 className="card-title">Otro heading</h5>
          <p className="card-text">Sandwich</p>
          <p className="card-text">Burrito</p>
          <p className="card-text">Jugo de naranja</p>
          <p className="card-text">Café americano</p>
      <button className="btn btn-info">Terminada</button>
      </div>
    </div>
  </div>
);

export default Cocina;
