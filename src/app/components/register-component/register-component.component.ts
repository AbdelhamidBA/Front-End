import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {

registerForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    password: new FormControl('', [Validators.required])
});

  constructor(private authService: AuthService,private router:Router) {
    if(this.authService.currentUserValue)
    {
      this.router.navigate(['/']);
    }
   }

  ngOnInit(): void {
  }

  OnClear()
  {

  }

  registerUser()
  {
    const Data = {
      user_fullname: this.fullname,
      user_birthday: this.birthDate,
      user_phone: this.phone,
      user_address: this.address,
      email: this.email,
      password: this.password,
      role: 'ROLE_USER'
    };

    this.authService.RegisterUser(Data).subscribe(result=>{
      console.log(result);
    });
  }

  get fullname()
  {
    return this.registerForm.value.fullname;
  }
  get birthDate()
  {
    return this.registerForm.value.birthDate;
  }
  get phone()
  {
    return this.registerForm.value.phone;
  }
  get address()
  {
    return this.registerForm.value.address;
  }
  get email()
  {
    return this.registerForm.value.email;
  }
  get password()
  {
    return this.registerForm.value.password;
  }
}
