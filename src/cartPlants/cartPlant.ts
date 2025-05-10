import { PlantActions } from "../../flux/Actions";
import { cartPlant, State, store } from "../../flux/Store";

class CartPlants extends HTMLElement {
    connectedCallback() {
        store.subscribe((state: State) => {this.handleChange(state)});
        this.attachShadow({ mode: 'open' });
        this.render();
    }

    handleChange(state: State) {
        this.render(state);
    }

    render(state = store.getState()) {
        if (!this.shadowRoot) return;

        const id = this.getAttribute('id');
        const commonName = this.getAttribute('CommonName') || 'Planta nombre comun';
        const scientificName = this.getAttribute('scientificName') || 'Planta nombre cientifico';
        const description = this.getAttribute('description') || 'descripcion de la plnta';
        const image = this.getAttribute('image');
        const floweringSeason = this.getAttribute('floweringSeason') || 'temporada de florarizacion';
        const sunExposure = this.getAttribute('sunExposure') || 'exposicion al sol';
        const watering = this.getAttribute('waterin') || 'agua que necesita creo';
    }
        this.shadowRoot.innerHTML = `
           <style> 
             div {
                    display: flex;
                }

                #plants-carts {
                    width: 80vw;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                    cartplants-style-type: none;
                    padding: 0;
                    border: 10px;
                }          
           </style>
           `
           <ul class="cartplants">
           ${state.cart.map ((cartPlants: CartPlants) => {
           return`
               <li class="cartplants">
                   
                   <h2>${cartplants.plants.commonName}</h2>
                   <h2>${cartplants.plants.scientificName}</h2>
                   <p>${cartplants.plants.description}</p>
                   <p>${cartplants.plants.type}</p>
                   <p>${cartplants.plants.floweringSeason}</p>
                   <p>${cartplants.plants.sunExposure}</p>
                   <p>${cartplants.plants.watering}</p>

                  
                   
                   <button class="remove" id="${CartPlants.id}">Remove</button>
               </li>
           `}).join("")}
       </ul>
   `;
`
   console.log(plants);

   const removeButton = this.shadowRoot.querySelectorAll('.remove');
   removeButton.forEach((button) => {
       button.addEventListener('click', () => {
           const id = button.getAttribute('id');
           if (id) {
               ProductActions.removeFromCartPlants(id);
           }
       });
   });
}
}

export default cartPlant;