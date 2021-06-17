import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Products Navegation
import { ProductsCreateComponent } from './products-create/products-create.component';

const routes: Routes = [
  { path: 'produtos/produtos-create', component: ProductsCreateComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
