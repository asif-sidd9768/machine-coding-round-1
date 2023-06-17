import { useContext } from "react"

import { BookContext } from "../../main"
import { setBookStatusAction } from "../../actions/bookActions"

import "./BookCard.css"
import { HighlightedString } from "../HighlightedString/HighlightedString.jsx"

export const BookCard = (book) => {
  const { booksState, booksDispatch } = useContext(BookContext)

  const handleStatusChange = (event) => {
    booksDispatch(setBookStatusAction({bookId: book.id, bookStatus: event.target.value}))
  }
  return (
    <div className="book-card-container"> 
      <img src={book.cover} className="book-card-image" />
      <p className="book-card-title" key={book.title}><HighlightedString text={book.title}  substring={booksState.searchParam}/> </p> 
      <p className="book-card-author">{book.author}</p>
      <div>
        <select className="book-card-status-menu" defaultValue={book.status} onChange={handleStatusChange}>
          <option value="current_reading">Currently Reading</option>
          <option value="want_read">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
  )
}