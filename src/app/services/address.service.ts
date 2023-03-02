import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address } from '../models/Address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  apiServer = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.apiServer}/address/all`);
  }

  getAddress(id: number): Observable<Address> {
    return this.http.get<Address>(`${this.apiServer}/address/` + id);
  }

  saveAddress(address: Address): Observable<Address> {
    return this.http.post<Address>(`${this.apiServer}/address/save`, address);
  }

  updateAddress(address: Address): Observable<Address> {
    return this.http.put<Address>(`${this.apiServer}/address/update`, address);
  }

  deleteAddress(id: number): Observable<void> {
    return this.http.get<void>(`${this.apiServer}/address/` + id);
  }
}
