import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from './endpoints';
@Injectable({
    providedIn: 'root'
})
export class ProductsService {
    constructor(private http: HttpClient) { }
    getAll() {
        console.log("Requesting from url", endpoints.products);
        
        return this.http.get(endpoints.products);
    }
    getProduct(id: string) {
        console.log("Requesting from url", endpoints.products);
        return this.http.get(`${endpoints.products}/${id}`);
    }
} 