import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product.interface';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  //instance de produit
  @Input() product: Product;
  @Output() favouriteAdded= new EventEmitter<Product>();
  //insere un produit en partant de l'UI:
  addToFavourites (product: Product): void {
    this.favouriteAdded.emit(product);
  }
  constructor() { }

  ngOnInit() {
  }

}
