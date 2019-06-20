import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@product/pages/product/product.page';
import { SharedModule } from '@shared/shared.module';
import { ProductComponent } from '@product/pages/components/product.component';

export const productRoutes: Routes = [
    {
        path: ':id',
        component: ProductPage
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(productRoutes),
    ],
    declarations: [
        ProductComponent,
        ProductPage
    ]
})
export class ProductModule {
}
