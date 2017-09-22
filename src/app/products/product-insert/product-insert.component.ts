import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from "@angular/forms"
import {ProductService} from 'app/services/product.service';
import {Router} from '@angular/router';
@Component({selector: 'app-product-insert', templateUrl: './product-insert.component.html',
  styleUrls: ['./product-insert.component.css']
})
export class ProductInsertComponent implements OnInit {
  insertForm: FormGroup;
  //built in type in angular form:
  name: FormControl;
  price: FormControl;
  description: FormControl;

 //injection de dependance dans le constructeur
  constructor(private fb:FormBuilder, private router: Router, private prodservice: ProductService) { }
  // pour la sauvegarde
  onSubmit () {
    console.log(this.insertForm.value);
    this.prodservice.insertProduct(this.insertForm.value)
      .subscribe(prd => {
        console.log('new producted posted');
        this.prodservice.clearCache();
        //redirection
        this.router.navigateByUrl("/products");
      })
     
  }

  ngOnInit() {
   
      this.name = new FormControl('', [Validators.required, Validators.maxLength(50)]);
      this.price = new FormControl('', [Validators.required, Validators.min(0), Validators.max(10000000)]);
      this.description = new FormControl('', [Validators.minLength(3), Validators.maxLength(500)]);
      this.insertForm = this.fb.group(
          {
              'name': this.name,
              'price': this.price,
              'description': this.description,
              'discontinued': false,
              'fixedPrice': false,
              'imageUrl': ''
          }
      );

  }

}
