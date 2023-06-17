export const setBooksAction = (booksData) => ({
  type:"SET_BOOKS",
  payload: booksData
})

export const setBookStatusAction = (data) => ({
  type:"SET_BOOK_STATUS",
  payload: data
})

export const setSearchParamAction = (value) => ({
  type: "SET_SEARCH_PARAM",
  payload: value
})