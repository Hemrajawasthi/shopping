import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/category/addcategory/category.Model';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  categories:any;
  brandObj:Brand = new Brand();
  private routeSub: Subscription;
  
  constructor(private http:HttpClient,
    private brandservice: BrandService,
    private readonly router: Router,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
    this.retrive();
    
  }

  retrive():void{
    this.brandservice.getAll()
        .subscribe(
            (data)=>{
                this.categories=data;
                console.log(data);
            },
            (error)=>{
                console.log(error);

            });
  }

  Delete(obj): void{
    obj.isActive = false;
     this.brandservice.update(obj.id, obj)
         .subscribe(
           response => {
             // console.log(response);
             this.retrive();
           },
           error => {
             console.log(error);
             this.retrive();
           });
   }

}
