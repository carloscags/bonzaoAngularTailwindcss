import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product-api/product.service';
import { Product } from '../product-api/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];



  constructor(
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }



}

