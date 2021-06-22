import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ProductCrudDeleteComponent } from './product-choice/products-delete/product-crud-delete/product-crud-delete.component';
import { ProductCrudCreateComponent } from './product-choice/products-create/product-crud-create/product-crud-create.component';
import { ProductsComponent } from './products-read/products.component';
import { ProductImgUploadComponent } from './product-img/product-img-upload/product-img-upload.component';

const routes: Routes = [
  { path: 'produtos', component: ProductsComponent },
  { path: 'criar-produtos', component: ProductCrudCreateComponent },
  { path: 'deletar-produto/:id', component: ProductCrudDeleteComponent },
  { path: 'images', component: ProductImgUploadComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
