import React, { Component } from 'react';
import axios from 'axios';

import AppContent from './components/AppContent'

import './App.scss';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      artists: [],
      token: ``,
    }
    this.setToken = this.setToken.bind(this)
  }

  getArtistis(token) {
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
        'Authorization': `Bearer ${token}`,
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
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  setToken (e) {
    let token = `` + e.target.value
    let keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      this.setState({ token: token})
      this.getArtistis(token)
    }
  }

  render () {
    return <AppContent { ...this.state } setToken={ this.setToken }/>
  }
}

export default App;
