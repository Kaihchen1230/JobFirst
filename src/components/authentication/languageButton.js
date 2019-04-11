import React from "react";
import { I18n } from 'aws-amplify';

let languageButton = ()=>{
    return(
      <span>
        <button>
          中文
        </button>
        <button>
          English
        </button>
      </span>)
}

export default languageButton;