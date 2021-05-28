import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import{CategoryService} from '../../services/category.service';
import { Category } from '../addcategory/category.Model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryObj:Category = new Category();
  categories:any;
  private routeSub: Subscription;

  constructor(private categoryservice: CategoryService,
    private readonly router: Router,
    private route: ActivatedRoute,
    ) { }
  ngOnInit(): void {
    this.retrive();
  }

  retrive():void{
    this.categoryservice.getAll()
        .subscribe(
            (data)=>{
                this.categories=data;
            },
            (error)=>{
                console.log(error);

            });
  }

}
