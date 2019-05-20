import React from 'react';

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
          <input onKeyUp={ setToken } type="text" id="autocomplete-input" className="autocomplete" />
          <label htmlFor="autocomplete-input">Token</label>
        </div>
      </div>
    </div>
  </div>
)

export default Form
