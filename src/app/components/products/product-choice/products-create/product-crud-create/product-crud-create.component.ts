import { Router } from '@angular/router';
import { ProductService } from './../../../product.service';
import { Product } from './../../../product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud-create',
  templateUrl: './product-crud-create.component.html',
  styleUrls: ['./product-crud-create.component.css']
})
export class ProductCrudCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    description: ''
  };

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancel(): void {
    this.productService.showMessage('Cancelado a criação do produto!');
    this.router.navigate(['/produtos']);
  }
}
