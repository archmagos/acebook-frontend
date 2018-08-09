import React from 'react';
import renderer from 'react-test-renderer';
import {Post} from '../src/post.js';

describe('Post', () => {
  it('Post renders the message given', () => {
    const component = renderer.create(<Post message='Hello' time='Today' />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});