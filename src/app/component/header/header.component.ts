import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Book Look-up by Fool of a Took';

  constructor() { }

  ngOnInit(): void {

  }

  onSearch(): void{
    console.log("Searching for your book");
  }
}
