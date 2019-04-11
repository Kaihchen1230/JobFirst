import React from 'react';
import MyCard from '../components/user_profile/card';
import MyList from '../components/user_profile/resumeList';

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

export default Profile;