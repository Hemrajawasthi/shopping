import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import{CategoryService} from '../../services/category.service';

import { Category } from '../addcategory/category.Model';


@Component({
  selector: 'app-editcategory',
  templateUrl: './editcategory.component.html',
  styleUrls: ['./editcategory.component.css']
})
export class EditCategoryComponent implements OnInit {
  categories:any;
  categoryObj:Category = new Category();

  private routeSub: Subscription;

  constructor(
    private categoryservice: CategoryService,
    private readonly router: Router,
    private route: ActivatedRoute
    ) { }

    currentcategories = null;
  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
     console.log(params['id']) //log the value of id

      
    this.categoryservice.get(params['id'])
    .subscribe(
        (data)=>{
            this.categoryObj=data;

            console.log(data);
        },
        (error)=>{
            console.log(error);

        });

    });
  }

  
  // retrive():void{

  //   this.categoryservice.get(this.categories.id)
  //       .subscribe(
  //           (data)=>{
  //               this.categoryObj=data;
                
  //               console.log(data);
  //           },
  //           (error)=>{
  //               console.log(error);

  //           });
  // }

}
