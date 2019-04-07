// import React from "react"
// import TestRenderer from 'react-test-renderer';

// function MyComponent() {
//   return (
//     <div>
//       <SubComponent foo="bar" />
//       <p className="my">Hello</p>
//     </div>
//   )
// }

import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import NavBar from "../navBar"

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<NavBar />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
