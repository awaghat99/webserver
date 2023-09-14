const { Router } = require("express");
const bookRouter = Router();

const Book = require("../models/bookmodel");

const { addaBook, listAllBooks, updateAuthor, deleteAll, getBookByTitle, updateByTitle, deleteByTitle } = require("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook);
// Will add a book based on the info given in the body of the request
bookRouter.get("/books/listAllBooks", listAllBooks);
// Will list all books, no body information required
bookRouter.put("/books/updateAuthor", updateAuthor);
// Updates the author of a given book based on the information in the body, provide a title with the title of book whose author you want to edit and an author you want to edit to
bookRouter.delete("/books/deleteall", deleteAll);
// Deletes all books in the db. no body info required

bookRouter.get("/books/getbook/:title", getBookByTitle);
// Produces the book to get based on title in url
bookRouter.put("/books/updatebook/:title", updateByTitle);
// Updates the book based on title given in url and any properties to update given in the body
bookRouter.delete("/books/deleteByTitle/:title", deleteByTitle);
// Deletes the book based on title given in url

module.exports = bookRouter;
