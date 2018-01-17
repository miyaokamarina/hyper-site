import React from 'react'
import Router from 'next/router'
import SearchIcon from '../static/search.svg'

export default class extends React.Component {
  handleSearch(event) {
    if (event.key === 'Enter') {
      Router.push({
        pathname: '/search',
        query: { q: event.target.value }
      })
    }
  }

  render() {
    return (
      <div className="search-input">
        <input
          type="text"
          placeholder="Search..."
          onKeyPress={this.handleSearch}
        />
        <SearchIcon className="search__icon" />

        <style jsx>{`
          .search-input {
            display: flex;
            justify-content: center;
          }
          input {
            background: transparent;
            border: none;
            color: white;
            font-size: 1.2rem;
            padding-right: 8px;
            width: 78px;
            transition: width 0.12s ease-in-out;
          }
          input:focus {
            width: 128px;
          }
          input::placeholder {
            color: #999999;
          }
          input::-webkit-input-placeholder {
            color: #999999;
          }
          input::-ms-input-placeholder {
            color: #999999;
          }
          :global(.search__icon) {
            opacity: 0.5;
            transition: opacity 0.12s ease-in-out;
          }
          input:focus + :global(.search__icon) {
            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}