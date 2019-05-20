import React from 'react';
import './../setupTest'
import { shallow, mount, render } from 'enzyme';
import toJson from "enzyme-to-json"

import App from './App';

it("should render the App", () => {
  const app = mount(<App />)
  expect(toJson(app)).toMatchSnapshot()
})
