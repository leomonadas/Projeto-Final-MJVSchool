import { Product } from './../../../../shared/models/product.models';
import { ProductsService } from './../../../../shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product?: Product;

  constructor(private activedRoute: ActivatedRoute,
    private productsServices: ProductsService) { }

  ngOnInit(): void {
    this.activedRoute.params.subscribe((params) => {
      const id = parseInt(params['idproduto']);
      this.product = this.productsServices.getById(id);
      console.log(params)
    })
  }

}
