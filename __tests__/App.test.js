import React from 'react';
import renderer from 'react-test-renderer';
import App from '../App';
import { instructions } from '../src/assets/constants/instructions';


test('renders correctly', async () => {
    const snap = renderer.create(<App ></App>).toJSON();

   expect(snap).toMatchSnapshot()
});

test('Not null', () => {
  const tree = renderer.create(<App />).toJSON();
  expect.anything(tree);
})