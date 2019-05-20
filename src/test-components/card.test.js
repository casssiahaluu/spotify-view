import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai'

import Card from './../components/card';

it("Card is a function", () => {
  expect(Card).to.be.a('function')
})

it('renders Card without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
  ReactDOM.unmountComponentAtNode(div);
});
