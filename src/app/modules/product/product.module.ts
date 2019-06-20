import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductPage} from '@product/pages/page/product.page';
import { SharedModule } from '@shared/shared.module';
import { ProductComponent } from '@product/pages/components/product/product.component';
import { NoProductComponent } from '@product/pages/components/noproduct/noproduct.component';
import { BadgeComponent } from './pages/components/badge/badge.component';
import { RatingComponent } from './pages/components/rating/rating.component';

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
        ProductPage,
        NoProductComponent,
        BadgeComponent,
        RatingComponent
    ]
})
export class ProductModule {
}
