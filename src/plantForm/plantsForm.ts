import { PlantActions } from "./flux/planCard/plantCard";
import { State, store, Product } from "../../flux/Store";


class PlantForm extends HTMLElement {
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
    }
    
}

const id = this.getAttribute('id');
const commonName = this.getAttribute('CommonName') || 'Planta nombre comun';
const scientificName = this.getAttribute('scientificName') || 'Planta nombre cientifico';
const description = this.getAttribute('description') || 'descripcion de la plnta';
const image = this.getAttribute('image');
const floweringSeason = this.getAttribute('floweringSeason') || 'temporada de florarizacion';
const sunExposure = this.getAttribute('sunExposure') || 'exposicion al sol';
const watering = this.getAttribute('waterin') || 'agua que necesita creo';

this.shadowRoot.innerHTML = `
    <style>
        div {
            display: flex;
        }

        #plans-carts {
            width: 60vw;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            cartplants-style-type: none;
            padding: 0;
            border: 10px;
        }
            `

   
this.shadowRoot.querySelector('#add-to-cartPlant')?.addEventListener('click', () => {
    const product = {
        id: state.cart.length + 1,
        commonName,
        scientificName,
        description,
        image: this.getAttribute('image') || '',
        floweringSeason,
        sunExposure,
        watering,
    };
    ProductActions.addToCartPlant(plant);
});
}
}

export default plantCard;
   