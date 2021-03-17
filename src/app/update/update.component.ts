import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id: number;
  firstName: any;
  surName: any;
  email: any;
  gender: any;
  password: any;
  mobile: any;
  address: any;
  city: any;
  pincode: any;
  dob: any;
  joiningDate: any;


  constructor(private router:ActivatedRoute,private routes:Router,private service:UserHttpService) { }

  ngOnInit(): void {

    this.router.queryParamMap.subscribe ((query)=>{
       console.log(query.keys)
       console.log("Url Data is ::"+query.get('id'));
      console.log("Url Data is ::"+query.get('firstName'));
      // console.log("Url Data is ::"+query.get('lastName'));
       console.log("Url Data is ::"+query.get('email'));

      this.id=+query.get('id');
      this.firstName=query.get('firstName');
      this.surName=query.get('surName');
      this.email=query.get('email');
      this.mobile=query.get("mobile");
      this.gender=query.get("gender");
      this.password=query.get("password");
      this.address=query.get("address");
      this.city=query.get("city");
      this.pincode=query.get("pincode");
      this.dob=query.get("dob");
      this.joiningDate=query.get("joiningDate");

    });

  }

  onFinalUpdateUser(){

    let user={
      "userId":this.id,
      "firstName":this.firstName,
      "surName":this.surName,
      "email":this.email,
      "gender":this.gender,
      "password":this.password,
      "mobile":this.mobile,
      "address":this.address,
      "city":this.city,
      "pincode":this.pincode,
      "dob":this.dob,
      "joiningDate":this.joiningDate,
      
    }
    this.service.updateUser(user)
    .subscribe((response)=>{
      console.log(response);
      this.routes.navigate(["/home"]);
    })
    
    
  }

  }


