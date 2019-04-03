import { Component, OnInit } from '@angular/core';
import { Book } from './../Book';
import { AddBookService } from '../add-book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  public books: Book[];
  public editMode = false;
  public editBook: Book[];
  constructor(private bookService: AddBookService) {
    this.books = this.bookService.getBooks();
  }

    editEmit(item) {
      this.editMode = !this.editMode;
      this.editBook = item;
    }

    saveEmit(book) {
      this.editMode = !this.editMode;
      this.bookService.saveEdit(book);
    }

    deleteEmit(item) {
      this.bookService.deleteBook(item);
    }

  ngOnInit() {
  }

}
