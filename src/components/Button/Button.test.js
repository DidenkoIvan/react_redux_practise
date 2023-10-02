import React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button Component Snapshot', () => {
  it('should render correctly with props', () => {
    const tree = renderer
      .create(
        <Button
          backgroundColor="blue"
          text="Click Me"
          onClick={() => {}}
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});