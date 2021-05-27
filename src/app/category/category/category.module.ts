import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './category.component';
import { CategoryService } from '../../services/category.service';

import {AddCategoryComponent} from '../addcategory/addcategory.component';
import {EditCategoryComponent} from '../editcategory/editcategory.component';

@NgModule({
  declarations: [
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,


  ],
  providers: [
    CategoryService
  ],
  bootstrap: [CategoryComponent]
})
export class CategoryModule { }

