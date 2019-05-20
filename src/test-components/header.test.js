import React from 'react';
import './../../setupTest'
import { shallow, mount, render } from 'enzyme';
import toJson from "enzyme-to-json"

import Header from './../components/header';

it("should render the header", () => {
  const header = mount(<Header />)
  expect(toJson(header)).toMatchSnapshot()
})
