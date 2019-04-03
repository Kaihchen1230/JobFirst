import React from "react"
//import { navigate } from "gatsby"
//import { handleLogin, isLoggedIn } from "../services/auth"
//import Layout from "../components/layout"

const postJob = () => (
    <>
    <h1>Post a New Job</h1>
    <form
      method="post"
      onSubmit="*"
    >
    <label>Employer:
        <input type="text" name="employer-name" onChange="*"/>
    </label>
    
    </form>
    </>

)

export default postJob

// for later

/*
<p>
            {isLoggedIn() ? (
                <>
                    You are logged in, so check your{" "}
                    <Link to="/app/profile">profile</Link>
                </>
            ) : (
                <>
                    You should <Link to="/app/login">log in</Link> to see restricted
                    content
                </>
            )}
        </p>


*/