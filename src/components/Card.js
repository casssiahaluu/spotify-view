import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ link, name, open, img }) => (
  <div className="col s12 m6 l4">
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
        <p>
          <a href={ open } >Abrir no Spotify</a>
        </p>
      </div>
    </div>
  </div>
)

Card.propTypes = {
  link: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}

export default Card
