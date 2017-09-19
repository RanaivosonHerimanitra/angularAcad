import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import {Product} from '../product.interface';
import {FavouriteService} from 'app/services/favourite.service';
import {ActivatedRoute} from '@angular/router';
import {ProductService} from 'app/services/product.service';

@Component({selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
 
})
export class ProductDetailComponent implements OnInit {
  //instance de produit
  @Input() product: Product;
  @Output() favouriteAdded= new EventEmitter<Product>();
  //insere un produit dans le favori
  //en partant de l'UI:
  addToFavourites (product: Product): void {
    this.favouriteAdded.emit(product);
    //ajout par l'intermediaire du service:
    this.favouriteService.addToFavourite(product);
  }
  constructor(private favouriteService: FavouriteService,
              private route: ActivatedRoute,
              private productService: ProductService) 
  { 

  }

  ngOnInit() {
    let id = this.route.snapshot.params["id"];
    if (id) {
      this.productService.getProductById(id)
      .subscribe(data=>this.product=data)
    }
  }
}
