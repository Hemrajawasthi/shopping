import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

const baseUrl = 'https://localhost:44340/api/category';

@Injectable()
export class CategoryService{

    constructor(private http:HttpClient){

    }
    getCourses(){
        return ["course1","course2","course3"];
    }

    get(id):Observable<any>{
        return this.http.get(`${baseUrl}/${id}`);

    }
    getAll():Observable<any>{
        return this.http.get(baseUrl);

    }
    create(data): Observable<any> {
        return this.http.post(baseUrl, data);
      }

    delete(id): Observable<any> {
        return this.http.delete(`${baseUrl}/${id}`);
      }

      deleteAll(): Observable<any> {
        return this.http.delete(baseUrl);
      }
}