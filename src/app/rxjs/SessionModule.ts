import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { ProductsService } from './ProductsService';

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductsService]
})
export class SessionModule { };
