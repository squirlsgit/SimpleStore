
import { Component, OnInit, Input } from '@angular/core';
//import { Store } from '@ngrx/store';
import { Product } from '../../../../';
//import { Observable } from 'rxjs';
import { addToCart } from '../../../models/product.model';
@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
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
    public addToCart = addToCart;
    constructor() {

    }

    ngOnInit() {


    }
}