import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom"

import App from './App.jsx'
import { BookContext, BookProvider } from './contexts/BookContext.jsx'

import './index.css'

export {BookContext}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BookProvider>
      <Router>
        <App />
      </Router>
    </BookProvider>
  </React.StrictMode>,
)
