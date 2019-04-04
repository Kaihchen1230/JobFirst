import React from 'react';
import MyCard from '../components/card';
import MyList from '../components/resumeList';

class Profile extends React.Component{
    render() {
        return (
            <div>
                <div>
                    <MyCard/>
                </div>
                <div>
                    <MyList/>
                </div>
            </div>
        )
    }
}