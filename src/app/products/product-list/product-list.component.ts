import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Product } from '../product.interface';
import {ProductService} from 'app/services/product.service';
import {FavouriteService} from 'app/services/favourite.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[]
  //shadow dom
  //encapsulation: ViewEncapsulation.Native
})
export class ProductListComponent implements OnInit {
    title: String = "Products";
    products$: Observable<Product[]>;
    mesg: string;
    selectedProduct: Product;
    pageSize: number = 5;
    start: number = 0;
    end: number = this.pageSize;
    sorter: string = "-price"; //descendant avec le signe moins
    sorter_name : string ="name";
    sortByName( ) {
        if (this.sorter_name=="name") {
            this.sorter_name="-name";
        } else {
            this.sorter_name="name";
        }
    }
    //also for resusable case:
    sortList(prpertyname: string): void {
        this.sorter= this.sorter.startsWith("-") ? prpertyname : "-" + prpertyname;
    }
    //pagination functions
    nextPage() {
        this.start += this.pageSize;
        this.end += this.pageSize;
        this.selectedProduct=null;
    }
    prevPage() {

        this.start -= this.pageSize;
        this.end -= this.pageSize;
        this.selectedProduct=null;
    }
    newFavourite(product:Product): void {
        this.mesg = "Product" + product.name + " added to your favourites";
    }
    ngOnInit() {
        /* les models ont des cycles de ve **/
        this.products$= this.productService.getProducts();
        // this.productService.getProducts()
        // .subscribe(res => this.products = res);
    }
    //la fonction qui est appelee lorsqu'on click sur un produit
    //comme dans java, ne retourne rien
    onSelectProduct(product: Product): void {
        //je recupere le produit selectionné
       this.selectedProduct = product;
       //ensuite affiche la route:
       this.router.navigateByUrl("/products/"+ product.id);
    }
    //propriete en lecture seule:
    get favourites(): number {
        return this.favouriteService.getFavouritesNb();

    }
    constructor (private productService: ProductService,
                 private favouriteService: FavouriteService,
                 private router: Router) 
    {
     // this.productService.getProducts()
       //                  .subscribe(res => this.products = res);
    }
}
