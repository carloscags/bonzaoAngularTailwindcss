import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-choice',
  templateUrl: './product-choice.component.html',
  styleUrls: ['./product-choice.component.css']
})
export class ProductChoiceComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navAddProduct(): void {
    this.router.navigate(['/criar-produtos']);
  }

  navDeleteProduct(): void {
    this.router.navigate(['/deleta-produtos']);
  }
}
