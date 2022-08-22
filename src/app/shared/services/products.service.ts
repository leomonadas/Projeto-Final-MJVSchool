import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Array<Product> = [
    { id: 1, imagem: '../../../assets/images/capuccino.png', nome: 'Capuccino', preco: 6.99 },
    { id: 2, imagem: '../../../assets/images/vanilla.png', nome: 'Vanilla', preco: 7.99 },
    { id: 3, imagem: '../../../assets/images/cherryccino.png', nome: 'Cherryccinoe', preco: 12.99 },
    { id: 4, imagem: '../../../assets/images/fresh.png', nome: 'Fresh', preco: 11.99 },
    { id: 5, imagem: '../../../assets/images/capuccino.png', nome: 'Capuccino', preco: 6.99 },
    { id: 6, imagem: '../../../assets/images/vanilla.png', nome: 'Vanilla', preco: 7.99 },
    { id: 7, imagem: '../../../assets/images/cherryccino.png', nome: 'Cherryccinoe', preco: 12.99 },
    { id: 8, imagem: '../../../assets/images/fresh.png', nome: 'Fresh', preco: 11.99 },
    { id: 9, imagem: '../../../assets/images/cherryccino.png', nome: 'Cherryccinoe', preco: 12.99 },
    { id: 10, imagem: '../../../assets/images/fresh.png', nome: 'Fresh', preco: 11.99 },
  ]

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((product)=>product.id === id);
  }
}
