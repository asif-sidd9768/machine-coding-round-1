import { createContext, useEffect, useReducer } from "react";
import { bookReducer, initialStateBook } from "../reducers/BookReducer";
import { setBooksAction } from "../actions/bookActions";
import { BOOKS_DATA } from "../db/booksData";

export const BookContext = createContext()
export const BookProvider = ({children}) => {
  const [booksState, booksDispatch] = useReducer(bookReducer, initialStateBook)

  useEffect(() => {
  booksDispatch(setBooksAction(BOOKS_DATA))
  }, [])

  return (
    <BookContext.Provider value={{booksState, booksDispatch}}>
      {children}
    </BookContext.Provider>
  )
}