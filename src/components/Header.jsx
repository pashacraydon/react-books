
import React, { Component } from 'react';
import SearchForm from 'components/SearchForm';

export default class Header extends Component {
  render () {
    return (
      <header>
        <h1><a href="/">React Books</a></h1>
        <p>A demonstration of a very simple React + Redux app.</p>
        <SearchForm />
        <p>
          <a href="https://github.com/pashasc/react_redux_starter_kit">
            Find it on Github
          </a>
        </p>
      </header>
    )
  }
}
