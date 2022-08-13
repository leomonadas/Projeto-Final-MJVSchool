import { Product } from './../../models/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  
    listaDeProdutos: Array<Product> = [
      { id: 1, imagem: '../../../assets/images/capuccino.png', nome: 'Capuccino', preco: 6.99 },
      { id: 2, imagem: '../../../assets/images/vanilla.png', nome: 'Vanilla', preco: 7.99 },
      { id: 3, imagem: '../../../assets/images/cherryccino.png', nome: 'Cherryccinoe', preco: 12.99 },
      { id: 4, imagem: '../../../assets/images/fresh.png', nome: 'Fresh', preco: 11.99 },
    ];

    constructor() { }
    
    ngOnInit(): void {
    }
}
