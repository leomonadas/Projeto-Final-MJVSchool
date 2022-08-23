import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-comprar',
  templateUrl: './button-comprar.component.html',
  styleUrls: ['./button-comprar.component.scss']
})
export class ButtonComprarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  comprar(){
    alert("Produto comprado com sucesso!")
  }

}
