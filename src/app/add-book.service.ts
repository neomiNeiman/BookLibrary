import { Injectable } from '@angular/core';
import { BookDetailsComponent } from './book-details/book-details.component';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  books;
  public i = 4;

  constructor() {
    this.books = [
      {
        author: 'Suzanne Collins',
        date: new Date('4/5/1813'),
        title: 'the Hunger Games',
        id: '1'
      },
      {
        author: 'jane Austen',
        date: new Date('4/5/1981'),
        title: 'pride and Prejudice',
        id: '2'
      },
      {
        author: 'George Orwell',
        date: new Date('4/5/1991'),
        title: 'animal Farm',
        id: '3'
      }
      ];
   }

  getBooks() {
    return this.books;
  }

  addBook(book) {
    book.id = this.i;
    this.books.push(book);
    this.i++;
  }

  saveEdit(book) {
    const itemIndex = this.books.findIndex(item => item.id === book.id);
    this.books[itemIndex] = book;
  }

  deleteBook(id) {
    let index = this.books.findIndex((book)=> book.id === id);
        this.books.splice(index, 1);
  }
}
