import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../product-api/product.service';
import { Product } from '../../../product-api/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-crud-delete',
  templateUrl: './product-crud-delete.component.html',
  styleUrls: ['./product-crud-delete.component.css']
})
export class ProductCrudDeleteComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0,
    description: ''
  };



  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.productService.readById(id).subscribe(product => {
    this.product = product;
    });
  }

  deleteProductPerId(): void {
    this.productService.delete(`${this.product.id}`).subscribe(() => {
      this.productService.showMessage('Produto Excluido com sucesso!');
      this.router.navigate(['/produtos']);
    });
  }

  cancel(): void {
    this.router.navigate(['/produtos']);
    this.productService.showMessage('Eclusão do item cancelado!');
  }

}
