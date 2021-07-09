import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create-navigation',
  templateUrl: './product-create-navigation.component.html',
  styleUrls: ['./product-create-navigation.component.css']
})
export class ProductCreateNavigationComponent implements OnInit {

  constructor(
    private router: Router
  ) { }


  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  navAddProduct(): void {
    this.router.navigate(['/criar-produtos']);
  }
}
