import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Brand, Category } from 'src/app/category/addcategory/category.Model';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-addbrand',
  templateUrl: './addbrand.component.html',
  styleUrls: ['./addbrand.component.css']
})
export class AddbrandComponent implements OnInit {
  categories:any;
  
  categoryObj:Category = new Category();
  brandObj:Brand = new Brand();
  constructor(
    private categoryservice: CategoryService,private readonly router: Router,
    public httpObj:HttpClient
    ) { }

  ngOnInit(): void {
    this.retrive();
  }
  retrive():void{
    this.categoryservice.getAll()
        .subscribe(
            (data)=>{
                this.categories=data;
                // console.log(data);
            },
            (error)=>{
                console.log(error);

            });
  }
  Submit(){
    this.httpObj.post("https://localhost:44340/api/brand"
     ,this.brandObj)
     .subscribe(res=>this.Success(res),
       res=>this.Error(res))
     ;
     console.log()

 }
 Success(res1:any){
  console.log("Sucessfully data inserted");
  this.router.navigate(['/brand']);
 this.categoryObj = new Category();
}
Error(res:any){
 console.log("Error");
 
 this.router.navigate(['/brand']);
 ;
}

}
