import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  keepLogged = false;
  loginForm:FormGroup;
  errorMessage="";

  constructor(private authService:AuthService, private router:Router) {
    if(this.authService.currentUserValue)
    {
      this.router.navigate(['/']);
    }
   }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required]),
      keepLogged:new FormControl('')
    });
  }




  login()
  {
    const Data ={
      email : this.email,
      password: this.password
    };
    this.authService.Login(Data).subscribe(result =>{
      if(this.authService.currentUserValue !== null){
        this.errorMessage = '';
        if(this.keepLogged === true){

        } else {

        }

        if(this.authService.currentUserValue.role === 'ROLE_USER'){
          this.router.navigate(['/register']);
        } else {
          this.router.navigate(['/']);
        }
    } else {
      this.errorMessage = 'Check your Coordinates';
    }

    },
    err => {
      console.log('err:' + err);
      this.errorMessage = 'Check your email & password';
    });


  }

  get email()
  {
    return this.loginForm.value.email;
  }
  get password()
  {
    return this.loginForm.value.password;
  }

}
