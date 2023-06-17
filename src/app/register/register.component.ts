import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  firstName="Mahmoud";
  active= true;
  dataList=[{name:"Mahmoud" , code:165 , country:"Tunisia"},
            {name:"Ali" , code:500 , country:"Tunisia"},
            {name:"Salah" , code:160 , country:"Tunisia"}];
name="Moussa";
  constructor(private router :Router){}

  goToUser(){
    this.router.navigate(["/user"])
  }
}

