import Book from "../model/BookModel.js";

export const getBook = async (req, res) => {
  try {
    console.log("api called")
    const book = await Book.find();
    console.log("this is your book data -> " , book)
    res.status(200).json({
      message: "Book found",
      book,
    });
  } catch (error) {
    res.status(404).json({
       message: "Book not found"+ error.message , 
        success : false , 
      });
  }
};
