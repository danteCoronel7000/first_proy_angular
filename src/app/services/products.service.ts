import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  urlProducts: string = "https://dummyjson.com/products";
  id: any;

  constructor(private xhttp: HttpClient) { }

  public getListarProductos(): Observable<any>{
    return this.xhttp.get<any>(this.urlProducts);
  }

  getProductById(id: string): Observable<any> {
    return this.xhttp.get<any>(`${this.urlProducts}/${id}`);
  }
}
