import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import AppContent from './components/AppContent'

import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      artists: []
    }
  }

  componentDidMount() {
    let ids = [
      '0TcVnvKse98awlZxtUKIOk',
      '11irmEzISytQwB3G8uhC5E',
      '2UhA8yc1DpFfkutXq5lMah'
    ] // ids dos artistas
    let self = this // referencia para usar o this dentro do ajax
    let config = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer BQCPiAF81W5U7yGN9Rhp7N3acp7opTxYlFOMTVhlgOhKuiphwZkkp7QoXg_ZCeCczaRkvDn-ktEPy6gZXEDs95XpTUdZuj_dQjFqE54O6TcWtjCsiVaekc-dLFQaa3ViFGDEEtO_TKQAXNdrj7wCw5vF4EJ1lNRyYMtVLYVpULYcY1klQyLz-Bx2Kp2FDFK5cz0xQWg1WQSF3rPzsUHFjEec9q7BJFYCsEkMO8MRRMiCjfwXMveOpz4Vg25X29xtSf3yfQdJ7w9OfncX9tx3olswsa53-BLBoQg`,
      }
    }

    axios.get(`https://api.spotify.com/v1/artists?ids=${ids}`, config)
    .then(function (response) {
      self.setState({
        artists: response.data.artists.map((artist, index) => ({
          id: index,
          img: artist.images[1].url,
          name: artist.name,
          link: artist.external_urls.spotify,
          open: artist.uri
        }))
      })
      return true
    })
    .catch(function (error) {
      console.log(error);
      return false
    });
  }

  render () {
    return (
      <AppContent { ...this.state } />
    )
  }
}

export default App;
