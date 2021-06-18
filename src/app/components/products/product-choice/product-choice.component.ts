import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-choice',
  templateUrl: './product-choice.component.html',
  styleUrls: ['./product-choice.component.css']
})
export class ProductChoiceComponent implements OnInit {


  @Input() id: number | undefined;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {

  }



  navAddProduct(): void {
    this.router.navigate(['/criar-produtos']);
  }

  navDeleteProduct(): void {
    this.router.navigate(['/deletar-produto', this.id]);
  }
 }
