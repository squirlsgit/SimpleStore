export interface Product {

}
export interface State {
    ProductList: Product[];
    Products: {
        [property: string]: Product
    }
}
export enum Events {
    Product = '[New Product] Request';
    Products = '[New Products] Request';
}

