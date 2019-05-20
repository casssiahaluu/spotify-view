import React from 'react';
import { shallow, mount, render } from 'enzyme';
import toJson from 'enzyme-to-json'
import axios from 'axios';
import './../../setupTest'

import App from './../App';

describe("<App />", () => {
  const props = {
    artists: [{
      id: 0,
      name: "Avicii",
      link: "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6",
      open: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6",
      img: "https://i.scdn.co/image/9c0d8fa969a9f5db6ff860203d6880a125e501d2"
    }]
  }
  const API = 'https://api.spotify.com/v1/artists?ids=1vCWHaC5f2uS3yhpwWbIA6';
  const token = `BQDl-Nyg9e4rIPs7nAwsW0gh9tbgnYJw1_rePQ5L4o4lD-iFRM-2NhWOJHCzJtm-ik0UVbCLknbbxEWYR_fexqkE_5CYTK-ON42L0kHBvkORNvximW9mqD8Nf2KcBO1VVwnKGebKhtllLQOWzlN6l0xq8lkVXshakVxb5m7jzwJiK1ANycI_-NnDFwLFocaoBpiCts_C4gYlxP3HN8dPctvSLtsNwwUG2OaED1gi8jT1fHpDLnzkuHjvHvW93vu1CqcM2duSJqpDMTedzkamwHx58kz0JrST-tA`
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  it('should call getArtistis', async () => {
    jest.spyOn(App.prototype, 'getArtistis')
    const app = mount(<App {...props} />)
    const instance = app.instance()
    instance.getArtistis(token)
    expect(App.prototype.getArtistis.mock.calls.length).toBe(1);
  })

  it('should call setToken', async () => {
    jest.spyOn(App.prototype, 'setToken')
    const app = mount(<App {...props} />)
    const instance = app.instance()
    const e = {
      target: {
        value: token
      }
    }
    instance.setToken(e)
    expect(App.prototype.setToken.mock.calls.length).toBe(1)
  })

  it('async API call with Jest', async () => {
    const app = mount(<App {...props} />)
    const instance = app.instance()

    const req = await axios.get(API, config)
    .then(function (response) {
      instance.state = response.data.artists.map((artist) => ({
        img: artist.images[1].url,
        name: artist.name,
        link: artist.external_urls.spotify,
        open: artist.uri
      }))
    })
    .catch(function (error) {
      console.log("This token has expired or is invalid. Get other in https://developer.spotify.com/console/get-several-artists/  and replace at token constant.\n", error);
    })
    expect(instance.state[0].name).toBe('Avicii')
  })

  it("should render the App", () => {
    const app = mount(<App { ...props }/>)
    expect(toJson(app)).toMatchSnapshot()
  })
})
