import React from 'react';

const Card = ({ id, link, name, open, img }) => (
  <div key={ id } className="col s12 m6 l4">
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <a href={ link } target="_blank" rel="noopener noreferrer">
          <img height="300" width="300" className="activator" alt={ name } src={ img } />
        </a>
      </div>
      <div className="card-content">
        <a href={ link } target="_blank" rel="noopener noreferrer">
          <span className="card-title activator grey-text text-darken-4">
            { name }
          </span>
        </a>
        <p><a href={ open } >Abrir no Spotify</a></p>
      </div>
    </div>
  </div>
)

export default Card
