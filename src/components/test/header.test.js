import React from "react"
import TestRenderer from 'react-test-renderer';

function MyComponent() {
  return (
    <div>
      <SubComponent foo="bar" />
      <p className="my">Hello</p>
    </div>
  )
}

function SubComponent() {
  return (
    <p className="sub">Sub</p>
  );
}

const testRenderer = TestRenderer.create(<MyComponent />);
const testInstance = testRenderer.root;

expect(testInstance.findByType(SubComponent).props.foo).toBe('bar');
expect(testInstance.findByProps({className: "sub"}).children).toEqual(['Sub']);

// console.log(testRenderer.toJSON());
// import renderer from "react-test-renderer"

// import Header from "../navBar"
// test("app snapshot test",()=>{
//   const component = renderer.create(<Header/>);
//   const tree = component.toJSON();
//   expect(tree).toMatchSnapshot();
// });
// describe("Header", () => {
//   it("renders correctly", () => {
//     const tree = renderer
//       .create(<Header siteTitle="Default Starter" />)
//       .toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })