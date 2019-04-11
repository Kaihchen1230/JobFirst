import React from "react";
import { I18n } from 'aws-amplify';

let languageButton = (props)=>{
    return(
      <span>
        <div>
          <button name = "language" value = "es" onClick={
            props.changed  
          }> 
            ENGLISH
          </button> 
          <button name = "language" value = "ch" onClick={
            props.changed
          }> 
           中文
          </button> 
       </div>
      </span>)
}

export default languageButton;