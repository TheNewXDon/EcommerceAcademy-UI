import { Product } from './../models/Product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiServer = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiServer}/product/all`);
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiServer}/product/` + id);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiServer}/product/save`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.apiServer}/product/update`, product);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServer}/product/` + id);
  }

  private products$ = new BehaviorSubject<any>({});
  selectedProducts$ = this.products$.asObservable();

  setProducts(products: Product[]) {
    this.products$.next(products);
  }
}
