import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../category/addcategory/category.Model';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  categories:any;
  productObj: Product = new Product();
  constructor(private categoryservice: CategoryService,private readonly router: Router,
    public httpObj:HttpClient) { }


  ngOnInit(): void {
     this.retrive();
     console.log("hey");
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

}
