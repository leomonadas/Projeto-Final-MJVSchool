import { UsersService } from './../../../../shared/services/users.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email: string = "";
  senha: string = "";

  constructor(private usersService: UsersService,
              private router: Router ) { }

  ngOnInit(): void {
  }

  authenticate(){
    const user = this.usersService.getUserByEmailAndPassword(this.email, this.senha);
    if (user) {
      this.router.navigateByUrl('/');
      sessionStorage.setItem('user', JSON.stringify(user));
    } else {
      // this.error = true;
      alert("Senha ou email errado! Tente novamente.")
    }
  } 

}
