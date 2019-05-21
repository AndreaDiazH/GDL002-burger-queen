import React from 'react';

const Mesero = () => (
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Desayunos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Comidas</a>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <p>Platillos</p>
        <img src= {require ('../../png-icons/cheese-burger.png')} alt = 'Hamburguesa' className= 'imgSize' />
        <img src= {require ('../../png-icons/hot-dog.png')} alt = 'Hot-dog' className= 'imgSize' />
        <img src= {require ('../../png-icons/pancakes.png')} alt = 'HotCakes' className= 'imgSize' />
        <img src= {require ('../../png-icons/sandwich.png')} alt = 'Sandwich' className= 'imgSize' />
        <img src= {require ('../../png-icons/soup.png')} alt = 'Sopa' className= 'imgSize' />
        <p>Bebidas</p>
        <img src= {require ('../../png-icons/soda-3.png')} alt = 'Refresco' className= 'imgSize' />
        <img src= {require ('../../png-icons/lemonade.png')} alt = 'Jugo' className= 'imgSize' />
        <img src= {require ('../../png-icons/water-1.png')} alt = 'Agua' className= 'imgSize' />
        <img src= {require ('../../png-icons/coffee-1.png')} alt = 'Café' className= 'imgSize' />
        <p>Extras</p>
        <img src= {require ('../../png-icons/cheese.png')} alt = 'Queso' className= 'imgSize' />
        <img src= {require ('../../png-icons/avocado.png')} alt = 'Aguacate' className= 'imgSize' />
        <img src= {require ('../../png-icons/fried-egg.png')} alt = 'huevo' className= 'imgSize' />
      </div>  
      <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
        <img src= {require ('../../png-icons/pizza.png')} alt = 'Pizza' className= 'imgSize' />
        <img src= {require ('../../png-icons/salad.png')} alt = 'Ensalada' className= 'imgSize' />
        <img src= {require ('../../png-icons/spaghetti.png')} alt = 'Spaghetti' className= 'imgSize' />
        <img src= {require ('../../png-icons/burrito.png')} alt = 'Burrito' className= 'imgSize' />
        <img src= {require ('../../png-icons/soup.png')} alt = 'Sopa' className= 'imgSize' />
        <p>Bebidas</p>
        <img src= {require ('../../png-icons/soda.png')} alt = 'Regresco' className= 'imgSize' />
        <img src= {require ('../../png-icons/wine-glass.png')} alt = 'Vino' className= 'imgSize' />
        <img src= {require ('../../png-icons/water.png')} alt = 'Agua' className= 'imgSize' />
        <p>Extras</p>
        <img src= {require ('../../png-icons/avocado.png')} alt = 'Aguacate' className= 'imgSize' />
        <img src= {require ('../../png-icons/shrimp.png')} alt = 'Camaron' className= 'imgSize' />
        <img src= {require ('../../png-icons/rice.png')} alt = 'Arroz' className= 'imgSize' />
      </div>
    </div>
  </div>  
);

export default Mesero; 
