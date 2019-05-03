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
export const onCreateAddress = `subscription OnCreateAddress {
  onCreateAddress {
    id
    line1
    line2
    city
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
    city
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
    city
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
      searchFieldName
      searchFieldLocation
      clickedCounts
    }
    dateApplied
    status
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
      searchFieldName
      searchFieldLocation
      clickedCounts
    }
    dateApplied
    status
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
      searchFieldName
      searchFieldLocation
      clickedCounts
    }
    dateApplied
    status
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
        searchFieldName
        searchFieldLocation
        clickedCounts
      }
      nextToken
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
        searchFieldName
        searchFieldLocation
        clickedCounts
      }
      nextToken
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
        searchFieldName
        searchFieldLocation
        clickedCounts
      }
      nextToken
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
    searchFieldName
    searchFieldLocation
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
    searchFieldName
    searchFieldLocation
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
    searchFieldName
    searchFieldLocation
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
