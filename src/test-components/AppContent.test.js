import React from 'react';
import './../../setupTest'
import { shallow, mount, render } from 'enzyme';
import toJson from "enzyme-to-json"

import AppContent from './../components/AppContent';

it("should render the AppContent if auth", () => {
  const props = {
    artists: [{
      id: 0,
      name: "Avicii",
      link: "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6",
      open: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6",
      img: "https://i.scdn.co/image/9c0d8fa969a9f5db6ff860203d6880a125e501d2"
    }]
  }
  const card = mount(<AppContent {...props} />)
  expect(toJson(card)).toMatchSnapshot()
})