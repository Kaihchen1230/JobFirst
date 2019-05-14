import { render, fireEvent, cleanup } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import React from "react";
import "jest-dom/extend-expect";
import BriefInfo from "../briefInfo";
import Timeline from "../Timeline";
import AboutCompany from "../aboutCompany";
import BusinessPic from "../businessPicture";
import PostJob from '../postJob';
import EdiProfile from "../EditProfileForm";
import Video from "../video";
import CeoPic from "../ceoPic";

// automatically unmount and cleanup DOM after the test is finished. 
// After each cleanup, there is a new unit test

afterEach(cleanup);

it("businessprofile - BriefInfo ", () => {
  const { getByText, getByTestId, container } = render(
    <BriefInfo
      companyType={"internet"}
      headquarter="NY"
      size={2}
      companyWebsite="alibaba.com"
      jobAmount={3}
    />
  );
  //if you want to use getByText, your text must be wrapped in a tap
  expect(getByText("Brief Info")).toBeInTheDocument();
  expect(getByText("internet")).toBeInTheDocument();
  expect(getByText("NY")).toBeInTheDocument();
});


cleanup();
let timeline = [
  { info: "create", date: "2019", title: "create" },
  { info: "create", date: "2018", title: "create" }
];

it("businessprofile - TimeLine ", () => {
  const { getByText } = render(
    <Timeline timeline={timeline} />
  );
  expect(getByText("create")).toBeInTheDocument();
  expect(getByText("2019")).toBeInTheDocument();
  expect(getByText("2018")).toBeInTheDocument();
});


cleanup();
it("businessprofile - About Company ", () => {
  const { getByText } = render(<AboutCompany description={"description"} />);
  expect(getByText("description")).toBeInTheDocument();
});


cleanup();
it("businessprofile - Business pic", () => {
  const { getByTestId} = render(
    <BusinessPic companyPic={"alibba.com"} />
  );
  expect(getByTestId('businessPic')).toHaveAttribute('src')
});


cleanup();
it("businessprofile - CEO ", () => {
  const { getByText } = render(
    <CeoPic ceo={"Ma Yun"} />
  );
  expect(getByText("Ma Yun")).toBeInTheDocument();
});

cleanup();
it("businessprofile - Video ", () => {
  const {getByTestId } = render(
    <Video videoURL={"alibaba.com"} />
  );
  // expect(getByTestId('comVideo')).toHaveAttribute('allowFullScreen')
  // expect(getByTestId('comVideo')).toHaveAttribute('frameBorder')
});

cleanup();
it("businessprofile - postJob ", () => {
  const {getByTestId,getByText  } = render(
    <PostJob jobList ={[{description:"good company", title:"alibaba"},{description:"bad company", title:"amazon"}]} />
  );
  expect(getByText("good company")).toBeInTheDocument();
  expect(getByText("bad company")).toBeInTheDocument();
});
