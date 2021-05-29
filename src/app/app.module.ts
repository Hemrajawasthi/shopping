import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './template/header/header.component';
import { CategoryComponent } from './category/category/category.component';
import { BrandComponent } from './brand/brand/brand.component';
import { ProductComponent } from './product/product.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AddCategoryComponent } from './category/addcategory/addcategory.component';
import { EditCategoryComponent } from './category/editcategory/editcategory.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './services/category.service';
import { AddbrandComponent } from './brand/addbrand/addbrand.component';
import { EditbrandComponent } from './brand/editbrand/editbrand.component';
import { FormsModule } from '@angular/forms';
import { BrandService } from './services/brand.service';
import { ProductlistComponent } from './product/productlist/productlist.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    BrandComponent,
    ProductComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    AddbrandComponent,
    EditbrandComponent,
    ProductlistComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  exports: [

  ],
  providers: [
    CategoryService,
    BrandService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
