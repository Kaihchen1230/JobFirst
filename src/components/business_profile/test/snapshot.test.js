import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import EditProfile from "../EditProfileForm"
import Video from "../video";
import PostJob from "../postJob"
import "../../../style/postJob.css";
import "../../../style/postJob.css";

let data = {companyAddress:{
                addressLine1:"NY",
                addressLine2:"NY",
                city:"Brooklyn",
                state:"NY"
                },
            timeline:[{title:"create",date:null}]
            }

describe("EditBusinessProfile snapshot test", () => {
    test('EditBusinessProfile render should match snapshot', () => {
        const render = new ReactShallowRenderer();
        render.render(<EditProfile data = {data}/>);
        expect(render.getRenderOutput()).toMatchSnapshot();
    });
});



describe("Video snapshot test", () => {
    test('Video render should match snapshot', () => {
        const render = new ReactShallowRenderer();
        render.render(<Video videoURL={"alibaba.com"}/>);
        expect(render.getRenderOutput()).toMatchSnapshot();
    });
});

describe("postJob snapshot test", () => {
    test('postJob render should match snapshot', () => {
        const render = new ReactShallowRenderer();
        render.render(<PostJob jobList ={[{title:null}]}/>);
        expect(render.getRenderOutput()).toMatchSnapshot();
    });
});