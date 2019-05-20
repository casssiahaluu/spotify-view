import React from 'react';
import './../../setupTest'
import { shallow, mount, render } from 'enzyme';
import toJson from "enzyme-to-json"

import Header from './../components/Header';

it("should render the Header", () => {
  const header = mount(<Header />)
  expect(toJson(header)).toMatchSnapshot()
})
