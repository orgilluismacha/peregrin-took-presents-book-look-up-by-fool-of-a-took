import { Component, OnInit } from '@angular/core';
import {Book} from "../../Book";
import { BookService } from 'src/app/services/book-s.service';

@Component({
  selector: 'app-shelf',
  templateUrl: './shelf.component.html',
  styleUrls: ['./shelf.component.css']
})
export class ShelfComponent implements OnInit {
  books: Book[] = [];


  constructor() { }

  ngOnInit(): void {
  }

}
