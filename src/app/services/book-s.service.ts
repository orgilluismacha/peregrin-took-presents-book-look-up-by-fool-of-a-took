import { Injectable } from '@angular/core';

import {Book} from "../Book";
import {BOOKS} from '../mock-boox';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks(): Book[]{
    return BOOKS;
  }
}
