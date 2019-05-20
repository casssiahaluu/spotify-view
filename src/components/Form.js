import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ setToken }) => (
  <div>
    <div className="col s12">
      <p className="center">
        O token está vazio, expirou ou é inválido. <br />
        Obtenha outro <a href="https://developer.spotify.com/console/get-several-artists/" target="_blank" rel="noopener noreferrer">Nesse link</a> e insira no campo abaixo
      </p>
    </div>
    <div className="col s12">
      <div className="row">
        <div className="input-field col s12">
          <i className="fas fa-lock-open prefix"></i>
          <input onKeyUp={ setToken } type="text" id="set_token" />
          <label htmlFor="set_token">Token</label>
        </div>
      </div>
    </div>
  </div>
)

Form.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default Form
