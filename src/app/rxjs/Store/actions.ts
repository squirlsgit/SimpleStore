import { Action } from '@ngrx/store';
import { Product, Events } from './';


export class new_products implements Action {
    readonly type = Events.Products;
    constructor(public payload: Product[]) {

    }
}

export class new_product implements Action {
    readonly type = Events.Product;
    constructor(public payload: Product) {}
}

export type Actions = new_products | new_product;

// store.dispatch(new Login({ username: username, password: password }));