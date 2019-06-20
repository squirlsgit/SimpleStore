import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ProductsService } from '../ProductsService';
import { Events } from './definitions';
import { loading_product } from './actions';
@Injectable()
export class ProductEffects {

    @Effect()
    loadProducts$ = this.actions$
        .pipe(
            ofType(Events.Load),
            mergeMap(() => this.productService.getAll()
                .pipe(
                    map(products => ({ type: Events.Products, payload: (Object as any).values(products) })),
                    catchError((error) => of({ type: Events.Error, error: error}))
                ))
        );

    constructor(
        protected actions$: Actions,
        protected productService: ProductsService
    ) { }
    @Effect()
    loadProduct$ = this.actions$
        .pipe(
            ofType(Events.LoadProduct),
            mergeMap((req: loading_product) => this.productService.getProduct(req.id)
                .pipe(
                    map(product => ({ type: Events.Product, payload: product })),
                    catchError((error) => of({ type: Events.Error, error: error }))
                ))
        );
}

