import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import NavBar from "../navBar"


describe("snapshot test",()=>{
test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<NavBar />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
});
