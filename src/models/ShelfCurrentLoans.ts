import { BookModel } from "./BookModel";

export class ShelfCurrentLoans {
  book: BookModel;
  daysLeft: number;
  constructor(book: BookModel, daysLeft: number) {
    this.book = book;
    this.daysLeft = daysLeft;
  }
}
