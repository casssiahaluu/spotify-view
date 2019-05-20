import React from 'react';
import Header from './header'
import Card from './card'

const AppContent = ({artists}) => (
  <div className="App">
    <Header />
    <main className="main">
      <div className="row container">
        {artists.map((info) => (
          <Card
            id={ info.id }
            link={ info.link }
            name={ info.name }
            open={ info.open }
            img={ info.img }
          />
        ))}
      </div>
    </main>
  </div>
)

export default AppContent
