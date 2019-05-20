import React from 'react';
import './../../setupTest'
import { shallow, mount, render } from 'enzyme';
import toJson from "enzyme-to-json"

import Card from './../components/card';

it("should render the card if auth", () => {
  const props = {
    name: "Avicii",
    link: "https://open.spotify.com/artist/1vCWHaC5f2uS3yhpwWbIA6",
    open: "spotify:artist:1vCWHaC5f2uS3yhpwWbIA6",
    img: "https://i.scdn.co/image/9c0d8fa969a9f5db6ff860203d6880a125e501d2"
  }
  const card = mount(<Card {...props} />)
  expect(toJson(card)).toMatchSnapshot()
})
