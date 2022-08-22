import { Router } from '@angular/router';
import { ProductsService } from './../../services/products.service';
import { Product } from './../../models/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
    listaDeProdutos: Array<Product> = this.productsService.getProducts();

    constructor(private productsService: ProductsService,
      private router : Router) { }
    
    ngOnInit(): void {
    }

    detalhesProduto(idProduto: number) {
      this.router.navigateByUrl(`produto/${idProduto}`);
    }
}
