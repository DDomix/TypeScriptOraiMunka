"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
class Book {
    constructor() {
        this.name = "";
        this.rating = Math.random() * 10;
    }
}
exports.Book = Book;
let book = new Book();
function toString() {
    return book.name + " " + book.rating;
}
