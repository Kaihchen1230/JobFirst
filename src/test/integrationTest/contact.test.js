import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Contact from '../../pages/contact';

describe('Contact page screenshot test', () => {
    test('Contact page should render correctly', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<Contact />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});