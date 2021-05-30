import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Brand } from 'src/app/category/addcategory/category.Model';
import { BrandService } from 'src/app/services/brand.service';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-editbrand',
  templateUrl: './editbrand.component.html',
  styleUrls: ['./editbrand.component.css']
})
export class EditBrandComponent implements OnInit {
  private routeSub: Subscription;
  brandObj:Brand = new Brand();
  brands:any;
  categories:any;
  constructor(
    private brandservices: BrandService,
    private categoryservices: CategoryService,
    private readonly router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.retrive();
    this.routeSub = this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
     console.log(params['id']) //log the value of id

      
    this.brandservices.get(params['id'])
    .subscribe(
        (data)=>{
            this.brandObj=data;

            console.log(data);
        },
        (error)=>{
            console.log(error);

        });

    });
  }
  Delete(obj): void{
    obj.isActive = false;
 
     this.brandservices.update(obj.id, obj)
    
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
  retrive():void{
    this.categoryservices.getAll()
        .subscribe(
            (data)=>{
              console.log(data);
                this.categories=data;
            },
            (error)=>{
                console.log(error);

            });
  }

  Update(): void {
    console.log(this.brandObj.brandName);
    this.brandservices.update(this.brandObj.id, this.brandObj)
   
      .subscribe(
        response => {
          this.router.navigate(['/brand']);
        },
        error => {
          console.log(error);
          this.router.navigate(['/brand']);
        });
  }
}
