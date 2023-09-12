const { Router } = require("express");
const bookRouter = Router();

const Book = require("../models/bookmodel");

const { addaBook, listAllBooks, updateAuthor, deleteAll, getBookByTitle, updateByTitle, deleteByTitle } = require("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook);
bookRouter.get("/books/listAllBooks", listAllBooks);
bookRouter.put("/books/updateAuthor", updateAuthor);
bookRouter.delete("/books/deleteall", deleteAll);

bookRouter.get("/books/getbook/:title", getBookByTitle);
bookRouter.put("/books/updatebook/:title", updateByTitle);
bookRouter.delete("/books/deleteByTitle", deleteByTitle);

module.exports = bookRouter;
