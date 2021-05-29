import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:any;
  constructor(private productservice: ProductService,
    private readonly router: Router
    ) { }

  ngOnInit(): void {
    
    this.retrive();
  }

  retrive():void{
    this.productservice.getAll()
        .subscribe(
            (data)=>{
                this.products=data;
                console.log(data);
            },
            (error)=>{
                console.log(error);

            });
  }
}
