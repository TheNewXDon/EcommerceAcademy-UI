import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProduct } from '../models/CartProduct.model';

@Injectable({
  providedIn: 'root'
})
export class CartProductService {

  apiServer = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getCartProducts(): Observable<CartProduct[]> {
    return this.http.get<CartProduct[]>(`${this.apiServer}/cartProduct/all`);
  }

  getCartProduct(id: number): Observable<CartProduct> {
    return this.http.get<CartProduct>(`${this.apiServer}/cartProduct/` + id);
  }

  saveCartProduct(cartProduct: CartProduct): Observable<CartProduct> {
    return this.http.post<CartProduct>(`${this.apiServer}/cartProduct/save`, cartProduct);
  }

  updateCartProduct(cartProduct: CartProduct): Observable<CartProduct> {
    return this.http.put<CartProduct>(`${this.apiServer}/cartProduct/update`, cartProduct);
  }

  deleteCartProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServer}/cartProduct/` + id);
  }

  private cartProducts$ = new BehaviorSubject<CartProduct[]>([]);
  selectedCartProducts$ = this.cartProducts$.asObservable();

  setCartProducts(cartProducts: CartProduct[]) {
    this.cartProducts$.next(cartProducts);
  }
}
