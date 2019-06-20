import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Events, Product } from '../../../';
import { Observable } from 'rxjs';

@Component({
    selector: 'product',
    templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
    @Input('product')

    public set product(p: Product) {
        console.log("Setting a new product ", p);
        this._product = p;
    }
    public get product(): Product {
        return this._product;
    }
    protected _product: Product;

    protected products$: Observable<any>;
    constructor(protected store: Store<{ products: State }>) {
        this.products$ = this.store.select(state => state.products);
    }

    ngOnInit() {

       
    }

}

