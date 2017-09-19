import { Injectable } from '@angular/core';
import {Product } from '../products/product.interface';

@Injectable()
export class FavouriteService {

    constructor() { }
    //impossible d'avoir des doublons dans le Set
    //une facon elegante de gerer
    private favourites: Set<Product>= new Set();

    addToFavourite (product: Product): void {
       // this.favourites.push(product);
       this.favourites.add(product);
    }
    getFavouritesNb (): number {
        //return this.favourites.length;
        return this.favourites.size;
    }
}