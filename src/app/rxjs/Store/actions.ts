import { Action } from '@ngrx/store';
import { Product, Events } from './definitions';

export class new_products implements Action {
    readonly type = Events.Products;
    constructor(public payload: Product[]) {

    }
}

export class new_product implements Action {
    readonly type = Events.Product;
    constructor(public payload: Product) {}
}

export class remove_product implements Action {
    readonly type = Events.RemoveProduct;
    constructor(public payloadId: string) { }
}

export class reset implements Action {
    readonly type = Events.Reset;
    constructor(public message?: string) { }
}
export class error implements Action {
    readonly type = Events.Error;
    constructor(public error?: string) {}
}
export class loading implements Action {
    readonly type = Events.Load;
    constructor(public message?: string) {}
}
export class loading_product implements Action {
    readonly type = Events.LoadProduct;
    constructor(public id: string) {}
}

export type actions = new_products | new_product | remove_product | reset | error | loading | loading_product;

// store.dispatch(new Login({ username: username, password: password }));