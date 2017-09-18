# angularAcad
Hands on during the Angular Academy Montreal 2017

## Javascript (ECMA'15):

 * export-import (module(s))

 * classes (`class`)

## Component declaration:

Automatically imported by angular-cli inside `app.module.ts`


## Template syntaxes:

*  [propreties] : binding dynamically feeded a UI in html (any html attributes)
Example 1 : `<li *ngFor="let product of products" [class.discontinued]="product.discontinued">...` css class is manipulated depending on boolean `discounted` value of the product.

Example 2: ` [class.selected]="product === selectedProduct"` compare instance from click product instance (if the product is selected, turn is css...)



* (...): event binding

* [(ngModel)]: two way databinding (with change detection)


## To enable shadow DOM:

insert `encapsulation: ViewEncapsulation.Native` in Components (03 modes available). Check documentation for compatibility across

