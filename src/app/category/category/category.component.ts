import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import{CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-category',
  // templateUrl: './category.component.html',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories:any;

  constructor(private categoryservice: CategoryService,
    private readonly router: Router
    ) { }
  ngOnInit(): void {
    this.retrive();
  }



  editBtn(){
    this.router.navigate(['/edit-category/{{category.id}}']);
    console.log("I am edit");
  }
  deleteBtn(){
    this.router.navigate(['/category']);
    console.log("I am delete");
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
