import { AppComponent } from './../../app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Imports Components products
import { ProductCrudCreateComponent } from './product-choice/products-create/product-crud-create/product-crud-create.component';
import { ProductsComponent } from './products-read/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductCrudDeleteComponent } from './product-choice/products-delete/product-crud-delete/product-crud-delete.component';
import { ProductCreateNavigationComponent } from './product-choice/products-create/product-create-navigation/product-create-navigation.component';
import { ProductDeleteNavigationComponent } from './product-choice/products-delete/product-delete-navigation/product-delete-navigation.component';

// Image upload components
import { ProductImgUploadComponent } from './product-img/product-img-upload/product-img-upload.component';
import { ProductImgUploadNavComponent } from './product-img/product-img-upload-nav/product-img-upload-nav.component';

// materials
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductCrudCreateComponent,
    ProductCreateNavigationComponent,
    ProductDeleteNavigationComponent,
    ProductCrudDeleteComponent,
    ProductImgUploadNavComponent,
    ProductImgUploadComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    ProductsRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ProductsModule { }
