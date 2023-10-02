import React from 'react';
import renderer from 'react-test-renderer';
import Cart from './Cart';

describe('Cart Component Snapshot', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(<Cart onSubmit={() => {}} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});