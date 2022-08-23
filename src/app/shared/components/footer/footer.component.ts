import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  hoje = new Date

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateByUrl(url: string){
    this.router.navigateByUrl(url);
  }

}
