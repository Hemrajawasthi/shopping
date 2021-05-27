import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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

  constructor(private categoryService: CategoryService, public httpObj:HttpClient,) { }

  ngOnInit(): void {
  }

  Submit(){
    this.httpObj.post("https://localhost:44340/api/category"
     ,this.categoryObj)
     .subscribe(res=>this.Success(res),
       res=>this.Error(res))
     ;

   //https://localhost:44391/Customer/Submit
 }
 Success(res1:any){
   console.log("Sucessfully data inserted");
  // this.customerObjs = res1;
  this.categoryObj = new Category();
  // this.errors = []; //clear the errors messaage 
  // alert(res1.customerName);
}
Error(res:any){
  console.log("Error");
  ;
}
saveCategory(){

}
  // saveCategory(): void {
  //   const data = {
  //     categoryName: this.category.categoryName,
  //     wearType: this.category.wearType,
  //     isActive: this.category.isActive
  //   };

  //   this.categoryService.create(data)
  //     .subscribe(
  //       response => {
  //         console.log(response);
  //         this.submitted = true;
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }

  // newTutorial(): void {
  //   this.submitted = false;
  //   this.category = {
  //     categoryName: '',
  //     wearType: '',
  //   isActive: ''
  //   };
  // }

}
