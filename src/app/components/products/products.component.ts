import { Component } from '@angular/core';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  table=[];
  constructor(private productService:ProductService){}
  ngOnInt():void{
    this.getProduct();
  }
getProduct(){
  this.table = this.productService.productTable;
  console.log("my product",this.table);
}

}
