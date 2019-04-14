import React from 'react';
import MyCard from '../components/user_profile/card';
import MyList from '../components/user_profile/resumeList';
import { getUser, isLoggedIn } from '../services/auth';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: 'testing',
            loggedin: true,
            profile_pic: ''
        }
    }
    
    render() {
        const username = this.state.username;
        // some more data about the user such as link for the profile pic.
        let pro = 
            <div>
                <div>
                    <MyCard/>
                </div>
                <div>
                    <MyList/>
                </div>
            </div>
        if(isLoggedIn() && getUser().username === username) {
            // logged in and viewing own profile, then should render edit button
            pro = 
            <div>
                <div>
                    <MyCard/>
                </div>
                <div>
                    <MyList/>
                </div>    
            </div>
        }
        return pro;
    }
}

export default Profile;