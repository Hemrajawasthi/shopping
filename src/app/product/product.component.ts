import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../category/addcategory/category.Model';
import { BrandService } from '../services/brand.service';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories:any;
  brand:any;
  productObj:Product = new Product();
  BrandID:number;
  CatID:number;

  submitted = false;
  constructor(
    private categoryservice: CategoryService,
    private readonly router: Router,
    public httpObj:HttpClient,
    private brandservices: BrandService
    ) { }


  ngOnInit(): void {
     this.retrive();
     this.retrive1();
  }
  retrive():void{
    this.categoryservice.getAll()
        .subscribe(
            (data)=>{
                this.categories=data;
                console.log(data);
            },
            (error)=>{
                console.log(error);

            });
  }
  retrive1():void{
    this.brandservices.getAll()
        .subscribe(
            (data)=>{
                this.brand=data;
                console.log(data);
            },
            (error)=>{
                console.log(error);

            });
  }
  Submit(){
    this.httpObj.post("https://localhost:44340/api/product"
     ,this.productObj)
     .subscribe(res=>this.Success(res),
       res=>this.Error(res))
     ;
 }

 Success(res1:any){
  this.router.navigate(['/product']);

 this.productObj = new Product();
 this.refresh();
 
}
Error(res:any){
 console.log("Error");
 this.refresh();
 
}

refresh(): void {
  window.location.reload();
}
}


