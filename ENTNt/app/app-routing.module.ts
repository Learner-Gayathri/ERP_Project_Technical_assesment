import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'dashboard',component:DashboardComponent},
{path:'products',component:ProductsComponent},
{path:'product-page',component:ProductPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
