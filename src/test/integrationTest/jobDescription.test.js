import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import JobDescription from '../../pages/jobDescription';

describe('Job Description screenshot test', () => {
    test('Job Description page should render correctly', () => {
        const renderer = new ReactShallowRenderer();
        renderer.render(<JobDescription />);
        expect(renderer.getRenderOutput()).toMatchSnapshot();
    });
});