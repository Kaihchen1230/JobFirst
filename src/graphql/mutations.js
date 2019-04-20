// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
    id
    firstName
    middleName
    lastName
    age
    email
    phone
    website
    pic
    address {
      id
      line1
      line2
      postalCode
      state
    }
    appliedJob {
      items {
        id
        dateApplied
      }
      nextToken
    }
  }
}
`;
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
    id
    firstName
    middleName
    lastName
    age
    email
    phone
    website
    pic
    address {
      id
      line1
      line2
      postalCode
      state
    }
    appliedJob {
      items {
        id
        dateApplied
      }
      nextToken
    }
  }
}
`;
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
    id
    firstName
    middleName
    lastName
    age
    email
    phone
    website
    pic
    address {
      id
      line1
      line2
      postalCode
      state
    }
    appliedJob {
      items {
        id
        dateApplied
      }
      nextToken
    }
  }
}
`;
export const createAddress = `mutation CreateAddress($input: CreateAddressInput!) {
  createAddress(input: $input) {
    id
    line1
    line2
    postalCode
    state
  }
}
`;
export const updateAddress = `mutation UpdateAddress($input: UpdateAddressInput!) {
  updateAddress(input: $input) {
    id
    line1
    line2
    postalCode
    state
  }
}
`;
export const deleteAddress = `mutation DeleteAddress($input: DeleteAddressInput!) {
  deleteAddress(input: $input) {
    id
    line1
    line2
    postalCode
    state
  }
}
`;
export const createAppliedJob = `mutation CreateAppliedJob($input: CreateAppliedJobInput!) {
  createAppliedJob(input: $input) {
    id
    Employee {
      id
      firstName
      middleName
      lastName
      age
      email
      phone
      website
      pic
      address {
        id
        line1
        line2
        postalCode
        state
      }
      appliedJob {
        nextToken
      }
    }
    Job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyPic
        description
      }
      jobTitle
      requirements
      datePosted
      location {
        id
        line1
        line2
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
    dateApplied
  }
}
`;
export const updateAppliedJob = `mutation UpdateAppliedJob($input: UpdateAppliedJobInput!) {
  updateAppliedJob(input: $input) {
    id
    Employee {
      id
      firstName
      middleName
      lastName
      age
      email
      phone
      website
      pic
      address {
        id
        line1
        line2
        postalCode
        state
      }
      appliedJob {
        nextToken
      }
    }
    Job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyPic
        description
      }
      jobTitle
      requirements
      datePosted
      location {
        id
        line1
        line2
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
    dateApplied
  }
}
`;
export const deleteAppliedJob = `mutation DeleteAppliedJob($input: DeleteAppliedJobInput!) {
  deleteAppliedJob(input: $input) {
    id
    Employee {
      id
      firstName
      middleName
      lastName
      age
      email
      phone
      website
      pic
      address {
        id
        line1
        line2
        postalCode
        state
      }
      appliedJob {
        nextToken
      }
    }
    Job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyPic
        description
      }
      jobTitle
      requirements
      datePosted
      location {
        id
        line1
        line2
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
    dateApplied
  }
}
`;
export const createEmployer = `mutation CreateEmployer($input: CreateEmployerInput!) {
  createEmployer(input: $input) {
    id
    companyName
    companyEmail
    companyPhone
    companyAddress {
      id
      line1
      line2
      postalCode
      state
    }
    companyWebsite
    timeline {
      items {
        id
        date
        info
      }
      nextToken
    }
    companyPic
    description
    job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyPic
        description
      }
      jobTitle
      requirements
      datePosted
      location {
        id
        line1
        line2
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
  }
}
`;
export const updateEmployer = `mutation UpdateEmployer($input: UpdateEmployerInput!) {
  updateEmployer(input: $input) {
    id
    companyName
    companyEmail
    companyPhone
    companyAddress {
      id
      line1
      line2
      postalCode
      state
    }
    companyWebsite
    timeline {
      items {
        id
        date
        info
      }
      nextToken
    }
    companyPic
    description
    job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyPic
        description
      }
      jobTitle
      requirements
      datePosted
      location {
        id
        line1
        line2
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
  }
}
`;
export const deleteEmployer = `mutation DeleteEmployer($input: DeleteEmployerInput!) {
  deleteEmployer(input: $input) {
    id
    companyName
    companyEmail
    companyPhone
    companyAddress {
      id
      line1
      line2
      postalCode
      state
    }
    companyWebsite
    timeline {
      items {
        id
        date
        info
      }
      nextToken
    }
    companyPic
    description
    job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyPic
        description
      }
      jobTitle
      requirements
      datePosted
      location {
        id
        line1
        line2
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
  }
}
`;
export const createPostedJob = `mutation CreatePostedJob($input: CreatePostedJobInput!) {
  createPostedJob(input: $input) {
    id
    company {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        postalCode
        state
      }
      companyWebsite
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
    }
    jobTitle
    requirements
    datePosted
    location {
      id
      line1
      line2
      postalCode
      state
    }
    applied {
      items {
        id
        dateApplied
      }
      nextToken
    }
    clickedCounts
  }
}
`;
export const updatePostedJob = `mutation UpdatePostedJob($input: UpdatePostedJobInput!) {
  updatePostedJob(input: $input) {
    id
    company {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        postalCode
        state
      }
      companyWebsite
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
    }
    jobTitle
    requirements
    datePosted
    location {
      id
      line1
      line2
      postalCode
      state
    }
    applied {
      items {
        id
        dateApplied
      }
      nextToken
    }
    clickedCounts
  }
}
`;
export const deletePostedJob = `mutation DeletePostedJob($input: DeletePostedJobInput!) {
  deletePostedJob(input: $input) {
    id
    company {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        postalCode
        state
      }
      companyWebsite
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
    }
    jobTitle
    requirements
    datePosted
    location {
      id
      line1
      line2
      postalCode
      state
    }
    applied {
      items {
        id
        dateApplied
      }
      nextToken
    }
    clickedCounts
  }
}
`;
export const createTimeline = `mutation CreateTimeline($input: CreateTimelineInput!) {
  createTimeline(input: $input) {
    id
    company {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        postalCode
        state
      }
      companyWebsite
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
    }
    date
    info
  }
}
`;
export const updateTimeline = `mutation UpdateTimeline($input: UpdateTimelineInput!) {
  updateTimeline(input: $input) {
    id
    company {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        postalCode
        state
      }
      companyWebsite
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
    }
    date
    info
  }
}
`;
export const deleteTimeline = `mutation DeleteTimeline($input: DeleteTimelineInput!) {
  deleteTimeline(input: $input) {
    id
    company {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        postalCode
        state
      }
      companyWebsite
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
    }
    date
    info
  }
}
`;
