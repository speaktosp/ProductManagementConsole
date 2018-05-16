import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductFormComponent } from './components/product-form/product-form.component';

import { ProductsComponent } from './components/products/products.component';

import { AboutComponent } from './components/about/about.component';
import { DetailsComponent } from './components/details/details.component';

import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'add', component: ProductFormComponent},
  {path: 'edit/:id', component: ProductFormComponent},
  {path: 'about', component: AboutComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
