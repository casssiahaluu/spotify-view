import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai'

import Card from './../components/card';

it("Card is a function", () => {
  expect(Card).to.be.a('function')
})

it('renders Card with props', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Card
      link="{ info.link }"
      name="{ info.name }"
      open="{ info.open }"
      img="{ info.img }"
    />,
  div);
  ReactDOM.unmountComponentAtNode(div);
});
