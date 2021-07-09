import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Products Navegation
import { RegisterComponent } from './components/register/register.component';
import { SocialNetworkComponent } from './components/social-network/social-network.component';
import { HomeComponent } from './views/home/home.component';
import { ProductsComponent } from './components/products/products-read/products.component';
import { ProductCrudCreateComponent } from './components/products/product-choice/products-create/product-crud-create/product-crud-create.component';
import { ProductCrudDeleteComponent } from './components/products/product-choice/products-delete/product-crud-delete/product-crud-delete.component';
import { ProductImgUploadComponent } from './components/products/product-img/product-img-upload/product-img-upload.component';

const routes: Routes = [


  { path: 'menu', component: HomeComponent },
  { path: 'produtos', component: ProductsComponent },
  { path: 'cadastre-se', component: RegisterComponent },
  { path: 'redes-sociais', component: SocialNetworkComponent },
  { path: 'criar-produtos', component: ProductCrudCreateComponent },
  { path: 'deletar-produto/:id', component: ProductCrudDeleteComponent },
  { path: 'upload-images', component: ProductImgUploadComponent },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'products', loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
