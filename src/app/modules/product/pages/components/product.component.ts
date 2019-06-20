import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Events, Product } from '../../../';
import { Observable } from 'rxjs';

@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
    public product: Product
    protected products$: Observable<any>;
    constructor(protected store: Store<{ products: State }>) {
        this.products$ = this.store.select(state => state.products);
    }

    ngOnInit() {


        this.store.dispatch({ type: Events.LoadProduct, id: '1731002612' });
        this.products$.subscribe(products => {
            console.log("new product", products.productId);
            console.log("Products", products);
            this.product = products.entities[products.productId];

        });
    }

}

