import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string = "http://localhost:8088/api/user/v1/";

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return (this.http.get(this.url+"getAll"));
  }
  addUser(user) {
    return (this.http.post(this.url+"add", user));
  }
  updateUser(user) {
    console.log("User Updated succesfully");
    return (this.http.put(this.url + "" + user.userId, user));

  }
  deleteUser(id) {
    console.log("User Deleted Succesfully with id:" + id);
    return (this.http.delete(this.url + "delete/" + id));
  }

  sortByJoiningDate(){
    return (this.http.get(this.url+"getAllByJoining"));

  }

  sortByDOB(){
    return (this.http.get(this.url+"getAllByDob"));

  }
}
