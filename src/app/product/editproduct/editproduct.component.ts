import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../category/addcategory/category.model';

import { BrandService } from '../../services/brand.service';

import { CategoryService } from '../../services/category.service';


@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  categories:any;
  brand:any;
  products:any;
  productObj:Product = new Product();
  BrandID:number;
  CatID:number;
  private routeSub: Subscription;

  submitted = false;
  constructor(
    private categoryservice: CategoryService,
    private brandservice: BrandService,

    private readonly router: Router,
    public httpObj:HttpClient,
    private brandservices: BrandService,
    private productservice: ProductService,
    private route: ActivatedRoute,
    ) { }


  ngOnInit(): void {
    this.retrive();
    this.retrive1();

    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
     console.log(params['id']) //log the value of id

      
    this.productservice.get(params['id'])
    .subscribe(
        (data)=>{
            this.productObj=data;

            console.log(data);
        },
        (error)=>{
            console.log(error);

        });

    });
  }
  retrive():void{
    this.categoryservice.getAll()
        .subscribe(
            (data)=>{
              console.log(data);
                this.categories=data;
            },
            (error)=>{
                console.log(error);

            });
  }
  retrive1():void{
    this.brandservice.getAll()
        .subscribe(
            (data)=>{
              console.log(data);
                this.brand=data;
            },
            (error)=>{
                console.log(error);

            });
  }
  Update(): void {
    this.productservice.update(this.productObj.id, this.productObj)
      .subscribe(
        response => {
          //console.log(response);
          this.router.navigate(['/product']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/product']);
        });
  }


refresh(): void {
  window.location.reload();
}
}



