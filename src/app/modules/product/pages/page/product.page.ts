import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Events, State } from '../../../';
@Component({
    selector: 'product-page',
    templateUrl: 'product.page.html'
})
export class ProductPage implements OnInit {
    //public product: Product
    protected product$: Observable<any>;
    constructor(protected store: Store<{ products: State }>, public route: ActivatedRoute) {
        this.product$ = this.store.select(state => state.products.entities[state.products.productId]);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            //console.log("params id", params.id);
            this.store.dispatch({ type: Events.LoadProduct, id: params.id });
        });
        
        this.store.select('products', 'entities').subscribe(success => {
            console.log("Got us some mucha", success);

        });
        //this.products$.subscribe(products => {
        //    console.log("new product", products.productId);
        //    console.log("Products", products);
        //    this.product = products.entities[products.productId];

        //});
    }

}

