import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai'

import AppContent from './../components/AppContent';

it("AppContent is a function", () => {
  expect(AppContent).to.be.a('function')
})

