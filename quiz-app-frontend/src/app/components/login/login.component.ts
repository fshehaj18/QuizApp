import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTokenService } from 'src/app/services/jwt-token.service';
import { LogInCredentials } from '../../common/log-in-credentials';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  response: any;

  credentials: LogInCredentials = new LogInCredentials();
  

  constructor(private router: Router, private service: JwtTokenService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    
    let response = this.service.generateToken(JSON.parse(JSON.stringify(this.credentials)));
    console.log(response);
    response.subscribe(
      res => {
        let tokenValue = JSON.parse(res).jwt;
        let userId = JSON.parse(res).id;
        localStorage.setItem('token', tokenValue);

        let role = JSON.parse(res).role;
        localStorage.setItem('role', role);
        console.log(role);

        if(role === "ADMIN"){
        this.router.navigate(['/users']);
        }
        
        else if(role === "USER"){
        this.router.navigate(['/user']);
        }
      },
      err => console.log(err)
    )
  }
}
