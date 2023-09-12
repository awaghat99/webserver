const Book = require("../models/bookmodel");

const addaBook = async (req, res) => {
  console.log("the req body is", req.body);
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
      ISBN: req.body.ISBN,
    });
    const successMessage = {
      message: "Book added",
      newBook: newBook,
    };
    res.status(201).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Ocuured",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const listAllBooks = async (req, res) => {
  try {
    const listOfBooks = await Book.find({});

    const successMessage = {
      message: "success",
      books: listOfBooks,
    };

    res.status(200).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Ocuured",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const updateAuthor = async (req, res) => {
  try {
    const filter = { title: req.body.title };
    const update = { author: req.body.author };
    await Book.findOneAndUpdate(filter, update, { returnOriginal: false });

    const successMessage = {
      message: "Book succesfully updated",
    };

    res.status(200).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Ocuured",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const deleteByTitle = async (req, res) => {
  try {
    const filter = { title: req.body.title };
    await Book.deleteOne(filter);

    const successMessage = {
      message: "Book successfully deleted",
    };
    res.status(200).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorMessage = {
      message: "Error Occured",
      error: error,
    };
    res.status(501).json(errorMessage);
  }
};

const getBookByTitle = async (req, res) => {
  try {
    const bookFound = await Book.find({ title: req.params.title });
    console.log(bookFound);
    const successMessage = {
      message: "Book Found!",
      book: bookFound,
    };
    res.status(200).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorMessage = {
      message: "Error Occured",
      error: error,
    };

    res.status(501).json(errorMessage);
  }
};

const updateByTitle = async (req, res) => {
  try {
    const filter = { title: req.params.title };
    const update = req.body;
    const book = await Book.findOneAndUpdate(filter, update, { returnOriginal: false });

    const successMessage = {
      message: "Book succesfully updated",
      updatedBook: book,
    };

    res.status(200).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Ocuured",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

const deleteAll = async (req, res) => {
  try {
    const deleted = await Book.deleteMany({});

    const successMessage = {
      message: "All books succesfully deleted",
      deletedBooks: deleted,
    };

    res.status(200).json(successMessage);
  } catch (error) {
    console.log(error);
    const errorResponse = {
      message: "Error Ocuured",
      error: error,
    };
    res.status(501).json(errorResponse);
  }
};

module.exports = { addaBook, listAllBooks, updateAuthor, deleteByTitle, getBookByTitle, updateByTitle, deleteAll };
