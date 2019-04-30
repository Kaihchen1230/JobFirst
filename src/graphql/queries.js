// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
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
      city
      postalCode
      state
    }
    appliedJob {
      items {
        id
        dateApplied
        status
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
    favoriteQuote
  }
}
`;
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        city
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
      favoriteQuote
    }
    nextToken
  }
}
`;
export const getAssociation = `query GetAssociation($id: ID!) {
  getAssociation(id: $id) {
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
        city
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
      favoriteQuote
    }
  }
}
`;
export const listAssociations = `query ListAssociations(
  $filter: ModelAssociationFilterInput
  $limit: Int
  $nextToken: String
) {
  listAssociations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        award
        skill
        language
        englishLevel
        favoriteQuote
      }
    }
    nextToken
  }
}
`;
export const getExperience = `query GetExperience($id: ID!) {
  getExperience(id: $id) {
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
        city
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
      favoriteQuote
    }
  }
}
`;
export const listExperiences = `query ListExperiences(
  $filter: ModelExperienceFilterInput
  $limit: Int
  $nextToken: String
) {
  listExperiences(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        award
        skill
        language
        englishLevel
        favoriteQuote
      }
    }
    nextToken
  }
}
`;
export const getEducation = `query GetEducation($id: ID!) {
  getEducation(id: $id) {
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
        city
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
      favoriteQuote
    }
  }
}
`;
export const listEducations = `query ListEducations(
  $filter: ModelEducationFilterInput
  $limit: Int
  $nextToken: String
) {
  listEducations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        award
        skill
        language
        englishLevel
        favoriteQuote
      }
    }
    nextToken
  }
}
`;
export const getAddress = `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    id
    line1
    line2
    city
    postalCode
    state
  }
}
`;
export const listAddresss = `query ListAddresss(
  $filter: ModelAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listAddresss(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      line1
      line2
      city
      postalCode
      state
    }
    nextToken
  }
}
`;
export const getAppliedJob = `query GetAppliedJob($id: ID!) {
  getAppliedJob(id: $id) {
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
        city
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
      favoriteQuote
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
      jobType
      description
      requirements
      datePosted
      deadline
      location {
        id
        line1
        line2
        city
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
    dateApplied
    status
  }
}
`;
export const listAppliedJobs = `query ListAppliedJobs(
  $filter: ModelAppliedJobFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppliedJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        award
        skill
        language
        englishLevel
        favoriteQuote
      }
      Job {
        id
        jobTitle
        jobType
        description
        requirements
        datePosted
        deadline
        clickedCounts
      }
      dateApplied
      status
    }
    nextToken
  }
}
`;
export const getEmployer = `query GetEmployer($id: ID!) {
  getEmployer(id: $id) {
    id
    companyName
    companyEmail
    companyPhone
    companyAddress {
      id
      line1
      line2
      city
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
        title
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
        jobType
        description
        requirements
        datePosted
        deadline
        clickedCounts
      }
      nextToken
    }
  }
}
`;
export const listEmployers = `query ListEmployers(
  $filter: ModelEmployerFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      companyName
      companyEmail
      companyPhone
      companyAddress {
        id
        line1
        line2
        city
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
    nextToken
  }
}
`;
export const getPostedJob = `query GetPostedJob($id: ID!) {
  getPostedJob(id: $id) {
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
        city
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
    jobType
    description
    requirements
    datePosted
    deadline
    location {
      id
      line1
      line2
      city
      postalCode
      state
    }
    applied {
      items {
        id
        dateApplied
        status
      }
      nextToken
    }
    clickedCounts
  }
}
`;
export const listPostedJobs = `query ListPostedJobs(
  $filter: ModelPostedJobFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostedJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      jobType
      description
      requirements
      datePosted
      deadline
      location {
        id
        line1
        line2
        city
        postalCode
        state
      }
      applied {
        nextToken
      }
      clickedCounts
    }
    nextToken
  }
}
`;
export const getTimeline = `query GetTimeline($id: ID!) {
  getTimeline(id: $id) {
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
        city
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
    title
    info
  }
}
`;
export const listTimelines = `query ListTimelines(
  $filter: ModelTimelineFilterInput
  $limit: Int
  $nextToken: String
) {
  listTimelines(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      date
      title
      info
    }
    nextToken
  }
}
`;
