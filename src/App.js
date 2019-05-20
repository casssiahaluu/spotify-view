import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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
        'Authorization': `Bearer BQApyguMBnc2O426VLBQP8dnJhuslm-0zIcBrGHWq4HlXwspvpffmiY6tOGmTt7P8oBcs3HdTDfnbkNyIidQ-XnAs3I2c1fSF-zTKMWwjYchTr6zwTCmhT6Y7sy6fnaSHFgXspy7-ynMnz-s6Aoc959gSK8jgT39DBa4AT7b97Ty565b6apMz-E5sFoM8LAYzqnkPQHSvJYUZJDKI-aNkalsbJgQF3QGwVFz2cAiF-bk85CmBuo02i-jqz3PtXmSW9oGxaZtb4nrpkmDBXS_lsWxq35fXv4O58w`,
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
      <div className="App">
        <header>
          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center"><i className="fab fa-spotify"></i> Spotify View </a>
            </div>
          </nav>
        </header>
        <main className="main">
          <div className="row container">
            {this.state.artists.map((info) => (
              <div key={ info.id } className="col s12 m6 l4">
                <div className="card">
                  <div className="card-image waves-effect waves-block waves-light">
                    <a href={ info.link } target="_blank" rel="noopener noreferrer">
                      <img height="300" width="300" className="activator" alt={ info.name } src={ info.img } />
                    </a>
                  </div>
                  <div className="card-content">
                    <a href={ info.link } target="_blank" rel="noopener noreferrer">
                      <span className="card-title activator grey-text text-darken-4">
                        { info.name }
                      </span>
                    </a>
                    <p><a href={ info.open } target="_blank" rel="noopener noreferrer">Abrir no Spotify</a></p>
                  </div>
                  <a href={ info.link } target="_blank" rel="noopener noreferrer">
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    )
  }
}

export default App;
