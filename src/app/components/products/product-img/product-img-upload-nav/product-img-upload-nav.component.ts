import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-img-upload-nav',
  templateUrl: './product-img-upload-nav.component.html',
  styleUrls: ['./product-img-upload-nav.component.css']
})
export class ProductImgUploadNavComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

  uploadNav(): void{
    this.router.navigate(['/upload-images']);
  }
}
