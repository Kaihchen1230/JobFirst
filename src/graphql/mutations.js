// eslint-disable
// this is an auto generated file. This will be overwritten

export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
    id
    username
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
    education {
      items {
        id
        startYear
        endYear
        degree
        schoolName
        country
        city
      }
      nextToken
    }
    experience {
      items {
        id
        startYear
        endYear
        companyName
        reasonToLeave
        city
        country
      }
      nextToken
    }
    award
    association {
      items {
        id
        position
        name
      }
      nextToken
    }
    skill
    language
    englishLevel
  }
}
`;
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
    id
    username
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
    education {
      items {
        id
        startYear
        endYear
        degree
        schoolName
        country
        city
      }
      nextToken
    }
    experience {
      items {
        id
        startYear
        endYear
        companyName
        reasonToLeave
        city
        country
      }
      nextToken
    }
    award
    association {
      items {
        id
        position
        name
      }
      nextToken
    }
    skill
    language
    englishLevel
  }
}
`;
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
    id
    username
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
    education {
      items {
        id
        startYear
        endYear
        degree
        schoolName
        country
        city
      }
      nextToken
    }
    experience {
      items {
        id
        startYear
        endYear
        companyName
        reasonToLeave
        city
        country
      }
      nextToken
    }
    award
    association {
      items {
        id
        position
        name
      }
      nextToken
    }
    skill
    language
    englishLevel
  }
}
`;
export const createAssociation = `mutation CreateAssociation($input: CreateAssociationInput!) {
  createAssociation(input: $input) {
    id
    position
    name
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const updateAssociation = `mutation UpdateAssociation($input: UpdateAssociationInput!) {
  updateAssociation(input: $input) {
    id
    position
    name
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const deleteAssociation = `mutation DeleteAssociation($input: DeleteAssociationInput!) {
  deleteAssociation(input: $input) {
    id
    position
    name
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const createExperience = `mutation CreateExperience($input: CreateExperienceInput!) {
  createExperience(input: $input) {
    id
    startYear
    endYear
    companyName
    reasonToLeave
    city
    country
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const updateExperience = `mutation UpdateExperience($input: UpdateExperienceInput!) {
  updateExperience(input: $input) {
    id
    startYear
    endYear
    companyName
    reasonToLeave
    city
    country
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const deleteExperience = `mutation DeleteExperience($input: DeleteExperienceInput!) {
  deleteExperience(input: $input) {
    id
    startYear
    endYear
    companyName
    reasonToLeave
    city
    country
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const createEducation = `mutation CreateEducation($input: CreateEducationInput!) {
  createEducation(input: $input) {
    id
    startYear
    endYear
    degree
    schoolName
    country
    city
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const updateEducation = `mutation UpdateEducation($input: UpdateEducationInput!) {
  updateEducation(input: $input) {
    id
    startYear
    endYear
    degree
    schoolName
    country
    city
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
  }
}
`;
export const deleteEducation = `mutation DeleteEducation($input: DeleteEducationInput!) {
  deleteEducation(input: $input) {
    id
    startYear
    endYear
    degree
    schoolName
    country
    city
    whose {
      id
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
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
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
    Job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyType
        headquarter
        ceo
        ceoPic
        size
        revenue
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
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
    Job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyType
        headquarter
        ceo
        ceoPic
        size
        revenue
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
      username
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
      education {
        nextToken
      }
      experience {
        nextToken
      }
      award
      association {
        nextToken
      }
      skill
      language
      englishLevel
    }
    Job {
      id
      company {
        id
        companyName
        companyEmail
        companyPhone
        companyWebsite
        companyType
        headquarter
        ceo
        ceoPic
        size
        revenue
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
    companyType
    headquarter
    ceo
    ceoPic
    size
    revenue
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
      items {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
      nextToken
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
    companyType
    headquarter
    ceo
    ceoPic
    size
    revenue
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
      items {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
      nextToken
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
    companyType
    headquarter
    ceo
    ceoPic
    size
    revenue
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
      items {
        id
        jobTitle
        requirements
        datePosted
        clickedCounts
      }
      nextToken
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
      companyType
      headquarter
      ceo
      ceoPic
      size
      revenue
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        nextToken
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
      companyType
      headquarter
      ceo
      ceoPic
      size
      revenue
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        nextToken
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
      companyType
      headquarter
      ceo
      ceoPic
      size
      revenue
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        nextToken
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
      companyType
      headquarter
      ceo
      ceoPic
      size
      revenue
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        nextToken
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
      companyType
      headquarter
      ceo
      ceoPic
      size
      revenue
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        nextToken
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
      companyType
      headquarter
      ceo
      ceoPic
      size
      revenue
      timeline {
        nextToken
      }
      companyPic
      description
      job {
        nextToken
      }
    }
    date
    info
  }
}
`;
