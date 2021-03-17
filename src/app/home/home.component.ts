import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from '../user-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nameSearch:string='';
  users: any = [];
  isRadioClick:any;
  idTodelete: any;
  updateObj:any;

  constructor(private service: UserHttpService, private routes: Router) { }

  ngOnInit(): void {
    document.body.classList.add('bg-img');
    this.getAllUsers();

  }

  getAllUsers() {
    this.service.getAllUsers().subscribe((response) => {
      console.log(response);
      this.users = response;

    }, (error) => {
      if (error.status > 400 && error.status <= 499) {

        alert("Server not Available");

      } else if (error.status == 0) {

        alert("Server not Available");
      }
    });

  }

  onAddUser() {
    this.routes.navigate(['/add']);
  }

  onUpdate() {
    if(this.radioButtonValidation()){
      console.log("Radio Button is checked.");
      console.log(this.updateObj);
      this.routes.navigate(['/update'],{queryParams:this.updateObj});

    }

  }

  onDelete() {
    if(this.radioButtonValidation()){
      console.log("Radio Button is checked.");
      this.service.deleteUser(this.idTodelete).subscribe((Response)=>{
        console.log("user is deleted with id : "+this.idTodelete);
        this.getAllUsers();
      });
    }

  }
  onRadioClick(item){
    console.log(item);
    this.isRadioClick=item.firstName;
    this.idTodelete=item.userId;
    console.log(this.idTodelete);
    this.updateObj={
      id:item.userId,
      firstName:item.firstName,
      surName:item.surName,
      email:item.email,
      gender:item.gender,
      password:item.password,
      mobile:item.mobile,
      address:item.address,
      city:item.city,
      pincode:item.pincode,
      dob:item.dob,
      joiningDate:item.joiningDate,

    }
  
  }


  radioButtonValidation(){
    if(this.isRadioClick==null){
      alert("Please Select an User..");
     return false;
    }
    else
    {
        console.log("ok selected "+this.isRadioClick);
        return true;
    }
  }

  onSortJoining(){
    this.service.sortByJoiningDate().subscribe(response=>{
      this.users=response;

    });
  

  }
  onSortDOB(){
    this.service.sortByDOB().subscribe(response=>{
      this.users=response;
   // this.routes.navigate(["/dob"]);
  });

  }

}
