import { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { BookContext } from "../../main"
import { BookCard } from "../../components/BookCard/BookCard"
import { setSearchParamAction } from "../../actions/bookActions"

import "./SearchPage.css"
import { RESOURCE } from "../../resources"

export const SearchPage = () => {
  const { booksState, booksDispatch } = useContext(BookContext)
  const navigate = useNavigate()

  const searchedBooks = booksState.books.filter(({title}) => title.toLowerCase().includes(booksState.searchParam.toLowerCase()))
  const handleSearchChange = (event) => {
    booksDispatch(setSearchParamAction(event.target.value))
  }
  return (
    <div>
      <div className="search-page-header">
        <span onClick={() => navigate(-1)} className="search-page-back-btn">&#8592;</span> 
        <input autoFocus onChange={handleSearchChange} className="search-page-input" placeholder={RESOURCE.search_input_plh} />
      </div>
      {
        booksState.searchParam && <div className="books-list-container search-books-list">
          {
            searchedBooks.map(book => 
              <BookCard key={book.id} {...book} />
            )
          }
        </div>
      }
      {
        (!booksState.searchParam || searchedBooks.length < 1) && <div className="empty-search-container">
          <p>{RESOURCE.empty_search_nothing}</p>
          <p>{RESOURCE.empty_search_change}</p>
        </div>
      }
    </div>
  )
}