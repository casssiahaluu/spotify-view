import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header'
import Card from './Card'
import Form from './Form'

const AppContent = ({artists, token, getting, setToken}) => (
  <div className="App">
    <Header />
    <main className="main">
      {!!token ?
        <div className="row container">
          {artists.map((info) => (
            <Card key={ info.id } { ...info } />
          ))}
        </div> :
        <div className="row container">
          <Form setToken={ setToken }/>
        </div>
      }
    </main>
  </div>
)

Card.propTypes = {
  artists: PropTypes.array
}

export default AppContent
