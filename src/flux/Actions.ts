import { AppDispatcher } from './Dispatcher';
import { getPlants } from '../services/Plants';
import { AppDispatcher } from './Dispatcher';
import { plants, State, store } from './Store';



export const ProductActionTypes = {
    GET_PLANTS: 'GET_PLANTS',
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CARTPLANTS',
    CREATE_PLANTS: 'CREATE_PLANTS',
}


export const PlantActions = {
    getPlants: async () => {
        const plants = await getPlants();
        AppDispatcher.dispatch({
            type: ProductActionTypes.GET_PLANTS,
            payload: plants,
        });
    },
    addToCartPlant: async(plants: plants) => {
        const id = store.getState().cart.length + 1;
        const cartPlant = {
            commonName,
            especificName,
            description,
        };
        AppDispatcher.dispatch({
            type: ProductActionTypes.ADD_TO_CART,
            payload: cartPlant,
        });
    },
    removeFromCartPlant: (id: string) => {
        AppDispatcher.dispatch({
            type: ProductActionTypes.REMOVE_FROM_CARTPLANT,
            payload: Number(id),
        });
    },
    createPlants: (newPlant: plants) => {
       AppDispatcher.dispatch({
            type:ProductActionTypes.CREATE_PLANTS,
export const Actions = {
    do: () => {
        AppDispatcher.dispatch({});
    },
};