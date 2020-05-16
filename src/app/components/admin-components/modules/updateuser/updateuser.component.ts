import { UserService } from './../../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  op_result :string;
  user_id :string="";
  user_list: any =[];
  constructor(public service: UserService, public toastr : ToastrService) { }

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



  ngOnInit(): void {
    this.AllUser();
    this.form.disable();
  }

  AllUser(){
    this.service.AllUser().subscribe(users => {
      for(let user of users)
      {
        this.user_list.push(user);
      }
      console.log(this.user_list);
    });
  }

  UpdateUser(){
    const Data = {
      user_fullname: this.fullname,
      user_birthday: this.birthDate,
      user_phone: this.phone,
      user_address: this.address,
      email: this.email,
      password: this.password,
      role: this.role
    };
    this.service.UpdateUser(Data, this.user_id).subscribe(upd => {
      this.op_result = upd.message;
      if (upd.error === false)
      {
        this.toastr.success( this.op_result, 'Update User Operation', {
          timeOut: 3000,
          progressBar: true
        });
      }
      else
      {
        this.toastr.error( this.op_result, 'Update User Operation', {
          timeOut: 3000,
          progressBar: true
        });
      }
    })
  }

  UpdateFormContent(value: string)
  {
    if(value !== undefined || value !== null)
    {
      this.user_id=value;
      this.form.enable();
      for(let user of this.user_list)
      {
        if(user['_id']===value)
        {
          this.form.setValue({
            $key: null,
            fullname: user['user_fullname'],
            birthDate: user['user_birthday'],
            phone: user['user_phone'],
            address: user['user_address'],
            email: user['email'],
            password: user['password'],
            role: user['role'],
          });
        }
      }
    }
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
