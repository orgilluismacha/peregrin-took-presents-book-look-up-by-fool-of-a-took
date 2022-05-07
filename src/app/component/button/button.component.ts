import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//Reusable button component
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() btnClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();
  }
}
