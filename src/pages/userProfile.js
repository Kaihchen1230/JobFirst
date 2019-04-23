import React from 'react';
import MyCard from '../components/user_profile/card';
import MyList from '../components/user_profile/resumeList';
import Person from '../components/user_profile/sidebar';
import Information from '../components/user_profile/content';
import Amplify, { API, graphqlOperation } from "aws-amplify";
import * as queries from '../graphql/queries';
import { getUser, isLoggedIn } from '../services/auth';

class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID
        }
    }

    componentDidMount = async() => {
        // fetch the user info
        const user = await API.graphql(graphqlOperation(queries.getEmployee, { id: this.state.userID }));
        console.log(user.data.getEmployee);
        this.setState({
            username:       user.data.getEmployee.username,
            address:        user.data.getEmployee.address,
            age:            user.data.getEmployee.age,
            award:          user.data.getEmployee.award,
            email:          user.data.getEmployee.email,
            englishLevel:   user.data.getEmployee.englishLevel,
            firstName:      user.data.getEmployee.firstName,
            lastName:       user.data.getEmployee.lastName,
            middleName:     user.data.getEmployee.middleName,
            phone:          user.data.getEmployee.phone,
            pic:            user.data.getEmployee.pic,
            website:        user.data.getEmployee.website

        })
    }
    
    render() {
        if(this.state.pic == null) {
            this.setState({
                pic: '../../static/pik.png'
            })
        }
        return pro;
    }
}

export default Profile;