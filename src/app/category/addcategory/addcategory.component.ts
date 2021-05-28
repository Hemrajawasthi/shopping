import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from './category.Model';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})

export class AddCategoryComponent implements OnInit {
  categoryObj:Category = new Category();

  submitted = false;

  constructor(private categoryservice: CategoryService,
    private readonly router: Router,
     public httpObj:HttpClient,) { }

  ngOnInit(): void {
  }

  Submit(){
    this.httpObj.post("https://localhost:44340/api/category"
     ,this.categoryObj)
     .subscribe(res=>this.Success(res),
       res=>this.Error(res))
     ;

 }
 Success(res1:any){
   console.log("Sucessfully data inserted");
   this.router.navigate(['/category']);
  this.categoryObj = new Category();
}
Error(res:any){
  console.log("Error");
  this.router.navigate(['/category']);
  ;
}
saveCategory(){

}
}
