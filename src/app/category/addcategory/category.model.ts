// Model

export class Category{
    
    id:number = 0; 
    categoryName:string ="";
    wearType: string="";
    isActive: boolean= true;


    // Brands:Array<Brand> = new Array<Brand>();
}

export class Brand{
    id:number = 0;
    brandName:string = "";
    categoryId:number=0;
    code:string = "";
    isActive: boolean= true;
}

export class Product{
    id:number;
    productName:string="";
    categoryId:number=0;
    brandId:number=0;
    price:number= 0;
    isActive: boolean = true;

}
