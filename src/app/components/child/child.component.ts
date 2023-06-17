import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Output() public childEvent =new EventEmitter();
  public eventChild(){
    this.childEvent.emit("Message from child to parent");
  }
 
@Input() public namefromParent="";
}
