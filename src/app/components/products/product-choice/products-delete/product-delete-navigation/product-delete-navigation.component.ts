import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-delete-navigation',
  templateUrl: './product-delete-navigation.component.html',
  styleUrls: ['./product-delete-navigation.component.css']
})
export class ProductDeleteNavigationComponent implements OnInit {


  @Input() id: number | undefined;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  navDeleteProduct(): void {
    this.router.navigate(['/deletar-produto', this.id]);
  }
}
