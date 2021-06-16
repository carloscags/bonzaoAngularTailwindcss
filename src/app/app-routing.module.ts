import { ProductsComponent } from './components/products/products-read/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  { path: 'menu', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'cadastre-se', component: ProductsComponent },
  { path: 'redes-sociais', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
