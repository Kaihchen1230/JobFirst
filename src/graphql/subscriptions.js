// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
export const onCreateAssociation = `subscription OnCreateAssociation {
  onCreateAssociation {
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
export const onUpdateAssociation = `subscription OnUpdateAssociation {
  onUpdateAssociation {
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
export const onDeleteAssociation = `subscription OnDeleteAssociation {
  onDeleteAssociation {
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
export const onCreateExperience = `subscription OnCreateExperience {
  onCreateExperience {
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
export const onUpdateExperience = `subscription OnUpdateExperience {
  onUpdateExperience {
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
export const onDeleteExperience = `subscription OnDeleteExperience {
  onDeleteExperience {
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
export const onCreateEducation = `subscription OnCreateEducation {
  onCreateEducation {
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
export const onUpdateEducation = `subscription OnUpdateEducation {
  onUpdateEducation {
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
export const onDeleteEducation = `subscription OnDeleteEducation {
  onDeleteEducation {
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
export const onCreateAddress = `subscription OnCreateAddress {
  onCreateAddress {
    id
    line1
    line2
    postalCode
    state
  }
}
`;
export const onUpdateAddress = `subscription OnUpdateAddress {
  onUpdateAddress {
    id
    line1
    line2
    postalCode
    state
  }
}
`;
export const onDeleteAddress = `subscription OnDeleteAddress {
  onDeleteAddress {
    id
    line1
    line2
    postalCode
    state
  }
}
`;
export const onCreateAppliedJob = `subscription OnCreateAppliedJob {
  onCreateAppliedJob {
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
export const onUpdateAppliedJob = `subscription OnUpdateAppliedJob {
  onUpdateAppliedJob {
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
export const onDeleteAppliedJob = `subscription OnDeleteAppliedJob {
  onDeleteAppliedJob {
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
export const onCreateEmployer = `subscription OnCreateEmployer {
  onCreateEmployer {
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
export const onUpdateEmployer = `subscription OnUpdateEmployer {
  onUpdateEmployer {
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
export const onDeleteEmployer = `subscription OnDeleteEmployer {
  onDeleteEmployer {
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
export const onCreatePostedJob = `subscription OnCreatePostedJob {
  onCreatePostedJob {
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
export const onUpdatePostedJob = `subscription OnUpdatePostedJob {
  onUpdatePostedJob {
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
export const onDeletePostedJob = `subscription OnDeletePostedJob {
  onDeletePostedJob {
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
export const onCreateTimeline = `subscription OnCreateTimeline {
  onCreateTimeline {
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
export const onUpdateTimeline = `subscription OnUpdateTimeline {
  onUpdateTimeline {
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
export const onDeleteTimeline = `subscription OnDeleteTimeline {
  onDeleteTimeline {
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
