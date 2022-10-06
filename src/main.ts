export { Book };



class Book {
    
   name : string = "";
   rating : number = Math.random()*10;
}
let book : Book = new Book();

 function toString() : string {
    return book.name + " " + book.rating;
}