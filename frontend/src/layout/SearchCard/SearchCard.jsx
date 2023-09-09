import React from 'react'
import './SearchCard.css'
const SearchCard = ({searchTitle,searchCategory=" "}) => {
  return (
    <div className='searchCard'>
      <span>{searchTitle}</span>
      <span>{searchCategory}</span>
    </div>
  )
}

export default SearchCard