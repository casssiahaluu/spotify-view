import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai'
import Header from './../components/header';

it("Header is a function", () => {
  expect(Header).to.be.a('function')
})

it('renders Header without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
