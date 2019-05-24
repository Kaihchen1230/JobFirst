import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import JobList from '../../pages/jobList';

describe('Job List screenshot test', () => {
    test('Job List page should render correctly', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<JobList />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});