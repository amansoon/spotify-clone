import React from 'react'
import Page from './Page'
import SearchHeader from '../components/SearchHeader'
import CategoryList from '../components/GenreList'

function Search() {
  return (
    <Page>
      <SearchHeader />
      <CategoryList />
    </Page>
  )
}

export default Search