import { ProductService } from './../../services/product.service';
import { Product } from './../../models/Product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  prodotti!: Product[];


  constructor(private productS: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProdotti();
  }

  getProdotti() {
    this.productS.getProducts().subscribe(
      (data: Product[]) => {
      console.log("prodotti: ", data);
      this.prodotti = data;
    }, (error: HttpErrorResponse) => console.log("Errore nel caricamento prodotti")
    )
  }

}
