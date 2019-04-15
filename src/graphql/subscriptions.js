// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEmplyeeInfo = `subscription OnCreateEmplyeeInfo {
  onCreateEmplyeeInfo {
    employee_id
    first_name
    middle_name
    last_name
    age
    email
    phone
    website
    pic
    address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    applied_job {
      job_id
      owner_id
      address {
        address_id
        person_id
        line1
        line2
        postal_code
      }
      date_applied
    }
  }
}
`;
export const onUpdateEmplyeeInfo = `subscription OnUpdateEmplyeeInfo {
  onUpdateEmplyeeInfo {
    employee_id
    first_name
    middle_name
    last_name
    age
    email
    phone
    website
    pic
    address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    applied_job {
      job_id
      owner_id
      address {
        address_id
        person_id
        line1
        line2
        postal_code
      }
      date_applied
    }
  }
}
`;
export const onDeleteEmplyeeInfo = `subscription OnDeleteEmplyeeInfo {
  onDeleteEmplyeeInfo {
    employee_id
    first_name
    middle_name
    last_name
    age
    email
    phone
    website
    pic
    address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    applied_job {
      job_id
      owner_id
      address {
        address_id
        person_id
        line1
        line2
        postal_code
      }
      date_applied
    }
  }
}
`;
export const onCreateAddress = `subscription OnCreateAddress {
  onCreateAddress {
    address_id
    person_id
    line1
    line2
    postal_code
    state
  }
}
`;
export const onUpdateAddress = `subscription OnUpdateAddress {
  onUpdateAddress {
    address_id
    person_id
    line1
    line2
    postal_code
    state
  }
}
`;
export const onDeleteAddress = `subscription OnDeleteAddress {
  onDeleteAddress {
    address_id
    person_id
    line1
    line2
    postal_code
    state
  }
}
`;
export const onCreateAppliedJob = `subscription OnCreateAppliedJob {
  onCreateAppliedJob {
    job_id
    owner_id
    address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    date_applied
  }
}
`;
export const onUpdateAppliedJob = `subscription OnUpdateAppliedJob {
  onUpdateAppliedJob {
    job_id
    owner_id
    address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    date_applied
  }
}
`;
export const onDeleteAppliedJob = `subscription OnDeleteAppliedJob {
  onDeleteAppliedJob {
    job_id
    owner_id
    address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    date_applied
  }
}
`;
export const onCreateEmployerInfo = `subscription OnCreateEmployerInfo {
  onCreateEmployerInfo {
    employer_id
    company_name
    company_email
    company_phone
    company_address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    company_website
    timeline {
      timeline_id
      company_id
      date
      info
    }
    company_pic
    description
  }
}
`;
export const onUpdateEmployerInfo = `subscription OnUpdateEmployerInfo {
  onUpdateEmployerInfo {
    employer_id
    company_name
    company_email
    company_phone
    company_address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    company_website
    timeline {
      timeline_id
      company_id
      date
      info
    }
    company_pic
    description
  }
}
`;
export const onDeleteEmployerInfo = `subscription OnDeleteEmployerInfo {
  onDeleteEmployerInfo {
    employer_id
    company_name
    company_email
    company_phone
    company_address {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    company_website
    timeline {
      timeline_id
      company_id
      date
      info
    }
    company_pic
    description
  }
}
`;
export const onCreatePostedJob = `subscription OnCreatePostedJob {
  onCreatePostedJob {
    job_id
    company_id
    job_title
    requirements
    date_posted
    location {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    clicked_counts
  }
}
`;
export const onUpdatePostedJob = `subscription OnUpdatePostedJob {
  onUpdatePostedJob {
    job_id
    company_id
    job_title
    requirements
    date_posted
    location {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    clicked_counts
  }
}
`;
export const onDeletePostedJob = `subscription OnDeletePostedJob {
  onDeletePostedJob {
    job_id
    company_id
    job_title
    requirements
    date_posted
    location {
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    clicked_counts
  }
}
`;
export const onCreateTimeline = `subscription OnCreateTimeline {
  onCreateTimeline {
    timeline_id
    company_id
    date
    info
  }
}
`;
export const onUpdateTimeline = `subscription OnUpdateTimeline {
  onUpdateTimeline {
    timeline_id
    company_id
    date
    info
  }
}
`;
export const onDeleteTimeline = `subscription OnDeleteTimeline {
  onDeleteTimeline {
    timeline_id
    company_id
    date
    info
  }
}
`;
