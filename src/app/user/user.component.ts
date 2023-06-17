import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  name ="Mahmoud";
  location ="Tunisia";
  status ="activé";
  constructor(private router :Router){}

  
getstatus(){
  return this.status;
}
getmessage(){
  console.log("My New Message");
}
goToRegister(){
  this.router.navigate(["/register"])
}
}
