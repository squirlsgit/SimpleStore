import { Product, State } from './definitions';

import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
export function selectProductId(a: Product): string {
    return a.id;
}
export function sortProducts(a: Product, b: Product): number {
    return a.id.localeCompare(b.id);
}


export const ProductAdapter: EntityAdapter<Product> = createEntityAdapter<Product>({
    selectId: selectProductId,
    sortComparer: sortProducts
});


export const products: State = ProductAdapter.getInitialState({
    productId: null
});
