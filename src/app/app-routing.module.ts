import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddCategoryComponent} from './category/addcategory/addcategory.component';
import { BrandComponent } from './brand/brand/brand.component';
import {CategoryComponent} from './category/category/category.component';
import { EditCategoryComponent } from './category/editcategory/editcategory.component';
import { ProductComponent } from './product/product.component';
import { AddbrandComponent } from './brand/addbrand/addbrand.component';
import { EditBrandComponent } from './brand/editbrand/editbrand.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { EditproductComponent } from './product/editproduct/editproduct.component';

const routes: Routes = [
  { path:  'category', component:  CategoryComponent},
  { path:  'product-list', component:  ProductlistComponent},
  
  { path:  'brand', component:  BrandComponent},
  { path:  'product', component:  ProductComponent},
  { path:  'add-category', component:  AddCategoryComponent},
  { path:  'edit-category/:id', component:  EditCategoryComponent},
  { path:  'edit-brand/:id', component:  EditBrandComponent},
  { path:  'edit-product/:id', component:  EditproductComponent},


  { path:  'add-brand', component:  AddbrandComponent},


  // { path: 'Customer', loadChildren: () => import('./category/category/category.module').then(m => m.CategoryModule) },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
