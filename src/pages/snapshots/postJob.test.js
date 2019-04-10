import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import PostJob from "../postJob"

describe("postJob snapshot test", () => {
    test('postJob render should match snapshot', () => {
        const render = new ReactShallowRenderer();
        render.render(<PostJob />);
        expect(render.getRenderOutput()).toMatchSnapshot();
    });
});