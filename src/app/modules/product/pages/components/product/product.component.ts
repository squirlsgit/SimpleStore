
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
    public PriceTags: PriceTag[] = [];
    @Input('product')

    public set product(p: Product) {
        //console.log("Setting a new product ", p);
        this.PriceTags = [];
        if (p.price2) {
            this.PriceTags.push({ price: p.price2, cuom: (p.cuom2) });
        }
        if (p.price1) {
            this.PriceTags.push({ price: p.price1, cuom: (p.cuom1) });
        }
        //console.log('Prices', this.PriceTags);
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
export type PriceTag = {
    price: number,
    cuom?: string
};