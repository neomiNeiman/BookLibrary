import { Book } from './../Book';
import { Component, OnInit } from '@angular/core';
// import { randomBytes } from 'crypto';
import { AddBookService } from '../add-book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
title: string;
author: string;
date: Date;

  constructor(private bookService: AddBookService) {
  }

  ngOnInit() {
  }
saveBook() {
  const book : Book = {title : this.title, author: this.author, date: this.date, id: null};
  this.bookService.addBook(book);
}
}
