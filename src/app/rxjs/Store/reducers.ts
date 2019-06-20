


import { actions } from './actions';
import { Events, Product, State } from './definitions';
import { products, ProductAdapter } from './session';


export function ManageProducts(
    state = products,
    action: actions
): State {
    switch (action.type) {
        case Events.Products: {
            state = ProductAdapter.addAll(action.payload, state);
            console.log("New Products", state);
            return state;
        }
        case Events.Product: {
            state = ProductAdapter.addOne(action.payload, state);
            state.productId = action.payload.id;
            console.log("New Product", state);
            return state;
        }
        case Events.RemoveProduct: {

            return state;
        }
        case Events.Reset: {
            if (action.message) {
                console.log(action.message);
            }

            return state;
        }
        case Events.Error: {
            console.error("Request Error", action.error);
        }
        case Events.Load: {
            console.log("Loading Products", action);
        }
         
        default: {
            return state;
        }

            

    }
}
