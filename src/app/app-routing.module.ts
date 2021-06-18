import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Products Navegation
import { RegisterComponent } from './components/register/register.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './components/products/products-read/products.component';
import { ProductsCreateComponent } from './components/products/product-choice/products-create/products-create.component';
import { ProductsDeleteComponent } from './components/products/product-choice/products-delete/products-delete.component';



const routes: Routes = [


  { path: 'menu', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'cadastre-se', component: RegisterComponent },
  { path: 'redes-sociais', component: SocialNetworkComponent },
  { path: 'criar-produtos', component: ProductsCreateComponent },
  { path: 'deletar-produto/:id', component: ProductsDeleteComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
