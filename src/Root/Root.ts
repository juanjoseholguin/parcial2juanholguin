}import { PlantActions } from '../flux/Actions';
import { plant, store } from '../flux/Store';
import { getPlants } from '../services/Plants';

class Root extends HTMLElement {
    products: Product[] = []; 
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        store.load();
        await ProductActions.getPlants();
        this.products = await getPlants();
        this.render();
    }

    async render() {
        if (!this.shadowRoot) return;
    }
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
                    list-style-type: none;
                    padding: 0;
                    border: 10px;
                }

                `
class Root extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (!this.shadowRoot) return;

        this.shadowRoot.innerHTML = `app`;
    }
}

export default Root;