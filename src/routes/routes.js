const { Router } = require("express");
const bookRouter = Router();

const Book = require("../models/bookmodel");

const { addaBook, listAllBooks, updateAuthor, deleteByTitle } = require("../controllers/controllers");

bookRouter.post("/books/addaBook", addaBook);
bookRouter.get("/books/listAllBooks", listAllBooks);
bookRouter.put("/books/updateAuthor", updateAuthor);
bookRouter.delete("/books/deleteByTitle", deleteByTitle);

module.exports = bookRouter;
