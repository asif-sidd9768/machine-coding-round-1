export const initialStateBook = {
  books: [],
  searchParam: ""
}

export const bookReducer = (state, action) => {
  switch(action.type){
    case "SET_BOOKS":
      return {...state, books: action.payload}
    case "SET_BOOK_STATUS": {
      const booksUpdated = state.books.map(book => book.id === action.payload.bookId ? {...book, status: action.payload.bookStatus}: book)
      return {...state, books: booksUpdated}
    }
    case "SET_SEARCH_PARAM": 
      return {...state, searchParam: action.payload}
  }
}