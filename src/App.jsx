import { Routes, Route, NavLink } from "react-router-dom"

import './App.css'
import { HomePage } from "./pages/HomePage/HomePage"
import { SearchPage } from "./pages/SearchPage/SearchPage"
import searchImg from "./assets/images/search.png"
import { RESOURCE } from "./resources"

function App() {

  return (
    <>
      <div>
        <NavLink className="search-button" to="/search"><img src={searchImg} className="search-img" /><span>{RESOURCE.search_btn}</span></NavLink>
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  )
}

export default App
