import { EntityState } from '@ngrx/entity';
export interface Product {
    id: string;
    imageUrl: string;
    brand: string;
    title: string;
    model: string;
    rating?: number;
    price1?: number;
    cuom1?: string;
    price2?: number;
    cuom2?: string;
    saving?: number;
    was?: number;
    addToCart: string;
    badges?: string[];
    promo?: string;
}

export interface State extends EntityState<Product>{
    productId: string | null
}
export enum Events {
    Product = '[New Product] From Request',
    Products = '[New Products] From Request',
    RemoveProduct = '[Remove Product] From Request',
    Reset = '[Reset Products] From Request',
    Error = '[Product Error] From Request',
    Load = '[Products Loading] Sending Request',
    LoadProduct = '[Product Loading] Sending Request',
}

