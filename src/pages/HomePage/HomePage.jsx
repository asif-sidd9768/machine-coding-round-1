import { useContext } from "react"
import { BookContext } from "../../main"
import { BookCard } from "../../components/BookCard/BookCard";

import "./HomePage.css"

const categories = [
  { id:1, key: "current_reading", value: "Currently Reading" },
  { id:2, key: "want_read", value: "Want to Read" },
  { id:3, key: "read", value: "Read" }
];


export const HomePage = () => {
  const { booksState } = useContext(BookContext)
  const filterBooks = filterKey => booksState.books.filter(({status}) => status === filterKey)
  return (
    <div className="books-container">
      {
        categories.map(category => 
          <div key={category.id}>
            <h3 className="category-heading">{category.value}</h3>
            <hr />  
            <div className="books-list-container">
            {
              filterBooks(category.key).map(book => 
                <BookCard key={book.id} {...book} />
              )
            }
            </div>
          </div>
        )
      }
    </div>
  )
}