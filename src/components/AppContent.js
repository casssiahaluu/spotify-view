import React from 'react';
import PropTypes from 'prop-types';

import Header from './header'
import Card from './card'

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
  artists: PropTypes.array.isRequired
}

export default AppContent
