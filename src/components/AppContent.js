import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header'
import Card from './Card'

const AppContent = ({artists}) => (
  <div className="App">
    <Header />
    <main className="main">
      <div className="row container">
        {artists.map((info) => (
          <Card key={ info.id } { ...info } />
        ))}
      </div>
    </main>
  </div>
)

Card.propTypes = {
  artists: PropTypes.array
}

export default AppContent
