
import { session, State, Product, Events, Actions} from './';



export function mapProducts(
    state = session,
    action: Actions
): State {
    switch (action.type) {
        case Events.Products: {
            action.payload.forEach((product) => {


            });
            return {
                
            
            }
        }

            

    }
}

export function addProduct(state: State, product: Product) {

}

//    export function reducer(
//        state = initialState,
//        action: Scoreboard.ActionsUnion
//    ): State {
//    switch (action.type) {
//        case Scoreboard.ActionTypes.IncrementHome: {
//            return {
//                ...state,
//                home: state.home + 1,
//            };
//        }

//        case Scoreboard.ActionTypes.IncrementAway: {
//            return {
//                ...state,
//                away: state.away + 1,
//            };
//        }

//        case Scoreboard.ActionTypes.Reset: {
//            return action.payload; // typed to { home: number, away: number }
//        }

//        default: {
//            return state;
//        }
//    }
//}