import React from "react"
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"

class postJob extends React.Component {
    render() {
        return (
            <div>
            <h1>Post a New Job</h1>
            <form
                method="post"
                onSubmit="*"
            >
                <label>Employer:
                    <input type="text" name="employer-name" onChange="*" />
                </label>
                <br />
                <br />
                <label>Date Posted:
                    <input type="date" name="job-post-date" />
                </label>
                <br />
                <br />
                <label>Job Type:
                    <input type="text" name="job-type" />
                </label>
                <br />
                <br />
                <label>Job Description:
                    <input type="text" name="job-description" />
                </label>
                <br />
                <br />
                <label>Contact Information:
                    <input type="text" name="job-contact" />
                </label>
                <br />
                <br />
                    <input type="submit" value="Add Job" />
                <br />
            </form>
            </div>
        )
}
}

export default postJob;