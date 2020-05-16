import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  op_result : string="";
  departments = [
    {id: 1, value: 'dep1'},
    {id: 2, value: 'dep2'},
    {id: 3, value: 'dep3'}
  ];
  constructor(public service: UserService, public toastr: ToastrService) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullname: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    address: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.required),
    role: new FormControl('', Validators.required)
  });

  initializeFormGroup(){
    this.form.setValue({
      $key: null,
      fullname: '',
      birthDate: '',
      phone: '',
      address: '',
      email: '',
      password: '',
      role: '',
    });
  }

  ngOnInit(): void {
  }
  OnClear(){
    this.form.reset();
  }
  addNewUser()
  {
    const Data = {
      user_fullname: this.fullname,
      user_birthday: this.birthDate,
      user_phone: this.phone,
      user_address: this.address,
      email: this.email,
      password: this.password,
      role: this.role
    };
    console.log(Data);

    this.service.AddUser(Data).subscribe(user => {
      console.log(user);
      this.op_result=user.message;
      if(user.error === false)
      {
        this.toastr.success( this.op_result,'Add Operation',{
          timeOut:3000,
          progressBar:true
        });
      }
      else
      {
        this.toastr.error( this.op_result,'Add Operation',{
          timeOut:3000,
          progressBar:true
        });
      }
    });
  }

  get fullname()
  {
    return this.form.value.fullname;
  }
  get birthDate()
  {
    return this.form.value.birthDate;
  }
  get phone()
  {
    return this.form.value.phone;
  }
  get address()
  {
    return this.form.value.address;
  }
  get email()
  {
    return this.form.value.email;
  }
  get password()
  {
    return this.form.value.password;
  }
  get role()
  {
    return this.form.value.role;
  }

}
