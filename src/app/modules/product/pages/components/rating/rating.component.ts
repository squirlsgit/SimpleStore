import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Events, State } from '../../../../';
@Component({
  selector: 'product-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
    protected rating$: Observable<any>;
    constructor(protected store: Store<{ products: State }>, public route: ActivatedRoute) {
        this.rating$ = this.store.select(state => state.products.entities[state.products.productId].rating);
    }

    ngOnInit() {

        this.store.select('products', 'entities').subscribe(success => {
            console.log("Got us", success);

        });
  }

}
