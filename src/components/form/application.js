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
    <label htmlFor="">
        DOB: <input type="Date"/>    
    </label>
    <br/>
    <br/>
    <label htmlFor="">
        Gender:
        <select name="" id="">
            <option value="Male"Male></option>
            <option value="Female">Female</option>
        </select>
    </label>
    <br/>
    <br/>

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
    <label htmlFor="">self Descriptions</label>
    <br/>
    <textarea name="" id="" cols="30" rows="10">
    </textarea>
    <br/>
    <br/>
    <input type="submit" value="Submit" />
    <br />
    </form>
    </>

)

export default application