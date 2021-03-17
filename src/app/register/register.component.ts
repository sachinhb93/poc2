import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  EMAIL_PATTERN=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  users:any;

  constructor(private service:UserHttpService,private routes:Router) { }

  ngOnInit() {
    document.body.classList.add('bg-img');

  }

  onSubmit(f){

    console.log(f.value);
    this.users=f.value;
    console.log(this.users);

    let user={
      "firstName":this.users.firstname,
      "surName":this.users.lastname,
      "email":this.users.email,
      "gender":this.users.gender,
      "password":this.users.password,
      "mobile":this.users.mobile,
      "address":this.users.address,
      "city":this.users.city,
      "pincode":this.users.pincode,
      "dob":this.users.dob,
      "joiningDate":this.users.joiningDate,

    }
    console.log(user);
    this.service.addUser(user).subscribe((response)=>{
      console.log(response);
      this.routes.navigate(['/home']);

    });

  }


}
