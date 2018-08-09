import React from 'react';
import expect from 'expect';
import 'isomorphic-fetch';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import {Comment} from '../src/comment.js';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Comment', () => {
  it('Post displays comment', () => {
    const component = shallow(<Comment message='Nice post' />);
    expect(component).toMatchSnapshot();
  });
});

// const component = renderer.create(<Post message='Hello' time='Today' />);
