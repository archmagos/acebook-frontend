import React from 'react';
import expect from 'expect';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme';
import {Post} from '../src/post.js';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

describe('Post', () => {
  it('Post renders the message given', () => {
    const component = shallow(<Post message='Hello' time='Today'/>);
    expect(component).toMatchSnapshot();
  });
});

// const component = renderer.create(<Post message='Hello' time='Today' />);
