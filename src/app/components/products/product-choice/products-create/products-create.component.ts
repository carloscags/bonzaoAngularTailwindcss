import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Product } from '../../product.model';
import { ProductService } from './../../product.service';
@Component({
  selector: 'app-products-create',
  templateUrl: './products-create.component.html',
  styleUrls: ['./products-create.component.css']
})
export class ProductsCreateComponent implements OnInit {

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
