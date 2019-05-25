import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import PostJobForm from '../../components/form/newPostJob';

describe('Job Post screenshot test', () => {
    test('Job Post page should render correctly', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<PostJobForm />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});