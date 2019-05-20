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
  const token = `BQDhRiNY_eU8UtcQA4RAUJiSRVko2qDjE_P02-P1Wc7DLYiQ6PqOa596W9HWDYPdbYYrTzw30-I1sokiWp0H4BdpkZDrHcWsefM4-I1UHRTQUS7W-sBM9lSOPzZCLc7m-v8hH349yc4wm-0ucKqeEQYTsJirXJfjNpVZyf-bgMTMMUGBM6AbDf0Ui4ROLco6_A-YfLwdWcnQUjYYCcckgy3Emybh-kCxtsuOv1wtLvYAxa3Yk3XPIeU9FUqIaiLDF3vC0_WNkJQX2ahj-FKiKJHzmB_vErrishk`
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }

  it('async API call with Jest', async () => {
    let resTest = []
    const req = await axios.get(API, config)
    .then(function (response) {
      resTest = response.data.artists.map((artist) => ({
        img: artist.images[1].url,
        name: artist.name,
        link: artist.external_urls.spotify,
        open: artist.uri
      }))
    })
    .catch(function (error) {
      console.log("This token has expired or is invalid. Get other in https://developer.spotify.com/console/get-several-artists/  and replace at token constant.\n", error);
    })
    expect(resTest[0].name).toBe('Avicii')
  })

  it('should call componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount')
    const wrapper = shallow(<App { ...props }/>)
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1)
  })

  it("should render the App", () => {
    const app = mount(<App { ...props }/>)
    expect(toJson(app)).toMatchSnapshot()
  })
})
