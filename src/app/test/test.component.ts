import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  constructor(){}
  tunisia=false;
  algeria= false;
  brazil=true;

  changeCountry(){
this.tunisia=true;
this.algeria=false;
this.brazil=false;
  }
}
