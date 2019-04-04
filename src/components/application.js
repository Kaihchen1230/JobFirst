import React from 'react';
import {Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete} from 'antd';


const application = () => (
    <>
    <h1>Application</h1>
    <form
      method="post"
      onSubmit="*"
    >
    <label>First Name:
        <input type="text" name="employer-name" onChange="*"/>
    </label>
    <br />
    <br />
    <label>Last Name:
        <input type="text" name="job-post-date" />
    </label>
    <br />
    <br />
    
    <label>Email:
        <input type="email" name="job-type" />
    </label>
    <br />
    <br />
    <label>Telephone:
        <input type="number" name="job-description" />
    </label>
    <br />
    <br />
    <label htmlFor="">
        
    </label>
    <br />
    <br />
    <input type="submit" value="Add Job" />
    <br />
    </form>
    </>

)

export default application