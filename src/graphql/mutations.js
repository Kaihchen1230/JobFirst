// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEmplyeeInfo = `mutation CreateEmplyeeInfo($input: CreateEmplyeeInfoInput!) {
  createEmplyeeInfo(input: $input) {
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
        state
      }
      date_applied
    }
  }
}
`;
export const updateEmplyeeInfo = `mutation UpdateEmplyeeInfo($input: UpdateEmplyeeInfoInput!) {
  updateEmplyeeInfo(input: $input) {
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
        state
      }
      date_applied
    }
  }
}
`;
export const deleteEmplyeeInfo = `mutation DeleteEmplyeeInfo($input: DeleteEmplyeeInfoInput!) {
  deleteEmplyeeInfo(input: $input) {
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
        state
      }
      date_applied
    }
  }
}
`;
export const createAddress = `mutation CreateAddress($input: CreateAddressInput!) {
  createAddress(input: $input) {
    address_id
    person_id
    line1
    line2
    postal_code
    state
  }
}
`;
export const updateAddress = `mutation UpdateAddress($input: UpdateAddressInput!) {
  updateAddress(input: $input) {
    address_id
    person_id
    line1
    line2
    postal_code
    state
  }
}
`;
export const deleteAddress = `mutation DeleteAddress($input: DeleteAddressInput!) {
  deleteAddress(input: $input) {
    address_id
    person_id
    line1
    line2
    postal_code
    state
  }
}
`;
export const createAppliedJob = `mutation CreateAppliedJob($input: CreateAppliedJobInput!) {
  createAppliedJob(input: $input) {
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
export const updateAppliedJob = `mutation UpdateAppliedJob($input: UpdateAppliedJobInput!) {
  updateAppliedJob(input: $input) {
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
export const deleteAppliedJob = `mutation DeleteAppliedJob($input: DeleteAppliedJobInput!) {
  deleteAppliedJob(input: $input) {
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
export const createEmployerInfo = `mutation CreateEmployerInfo($input: CreateEmployerInfoInput!) {
  createEmployerInfo(input: $input) {
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
export const updateEmployerInfo = `mutation UpdateEmployerInfo($input: UpdateEmployerInfoInput!) {
  updateEmployerInfo(input: $input) {
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
export const deleteEmployerInfo = `mutation DeleteEmployerInfo($input: DeleteEmployerInfoInput!) {
  deleteEmployerInfo(input: $input) {
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
export const createPostedJob = `mutation CreatePostedJob($input: CreatePostedJobInput!) {
  createPostedJob(input: $input) {
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
export const updatePostedJob = `mutation UpdatePostedJob($input: UpdatePostedJobInput!) {
  updatePostedJob(input: $input) {
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
export const deletePostedJob = `mutation DeletePostedJob($input: DeletePostedJobInput!) {
  deletePostedJob(input: $input) {
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
export const createTimeline = `mutation CreateTimeline($input: CreateTimelineInput!) {
  createTimeline(input: $input) {
    timeline_id
    company_id
    date
    info
  }
}
`;
export const updateTimeline = `mutation UpdateTimeline($input: UpdateTimelineInput!) {
  updateTimeline(input: $input) {
    timeline_id
    company_id
    date
    info
  }
}
`;
export const deleteTimeline = `mutation DeleteTimeline($input: DeleteTimelineInput!) {
  deleteTimeline(input: $input) {
    timeline_id
    company_id
    date
    info
  }
}
`;
