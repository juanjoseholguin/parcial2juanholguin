import { AppDispatcher, Action } from './Dispatcher';
import { ProductActionTypes} from './Actions';



export type plants = {
    id: number;
    commonName: string;
    scientificName: string;
    image: string;
    type: string;
    floweringSeason: string;
    sunExposure: string;
    watering: string;
};

export type CartPlant = {
    image: string;
    commonName: string;
    scientificName: string;
};

export type State = {

   plants: plants []; 
    cartplant: CartPlant[];
};


    private _listeners: Listener[] = [];

    constructor() {
        AppDispatcher.register(this._handleActions.bind(this));
    }

    getState() {
        return {};
    }

    _handleActions(action: Action): void {
        switch (action.type) {
            case "UNO":
                break;
        }
    }

    private _emitChange(): void {
        for (const listener of this._listeners) { }
    }

    unsubscribe(listener: Listener): void { }
}

export const store = new Store();