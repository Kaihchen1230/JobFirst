import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import BusinessProfile from '../businessProfile';

describe('Business profile screenshot test', () => {
    test('Business profile should render correctly', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<BusinessProfile />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});