import {render,fireEvent, cleanup} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import React from 'react';
import 'jest-dom/extend-expect';
import BriefInfo from './briefInfo';
import Timeline from './Timeline';

// automatically unmount and cleanup DOM after the test is finished.
afterEach(cleanup);


it('businessprofile - BriefInfo ', () => {
  const {getByText, getByTestId, container} 
      = render(
          <BriefInfo companyType ={"internet"}
              headquarter ="NY"
              size = {2}
              companyWebsite = "alibaba.com"
              jobAmount ={3}
          />);
  //if you want to use getByText, your text must be wrapped in a tap
  expect(getByText('Brief Info')).toBeInTheDocument();
  expect(getByText('internet')).toBeInTheDocument();
  expect(getByText('NY')).toBeInTheDocument();
})


cleanup();


let timeline = [{info:"create", date:"2019", title:"create"}]

it('businessprofile - TimeLine ', () => {
  const {getByText, getByTestId, container} 
      = render(
          <Timeline 
            timeline = {timeline}
          />);
  //if you want to use getByText, your text must be wrapped in a tap
  expect(getByText('Timeline')).toBeInTheDocument();

})