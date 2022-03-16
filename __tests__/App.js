import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';

const tree = renderer.create(<App />).toJSON();

test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});

test('Not null', () => {
  expect.anything(tree);
})