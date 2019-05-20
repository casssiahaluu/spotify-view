import React from 'react';
import './../../setupTest'
import { shallow, mount, render } from 'enzyme';
import toJson from "enzyme-to-json"

import Form from './../components/Form';

it("should render the Form", () => {
  let state = () => {}
  const header = mount(<Form setToken={ state } />)
  expect(toJson(header)).toMatchSnapshot()
})
