// eslint-disable
// this is an auto generated file. This will be overwritten

export const getEmplyeeInfo = `query GetEmplyeeInfo($id: ID!) {
  getEmplyeeInfo(id: $id) {
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
export const listEmplyeeInfos = `query ListEmplyeeInfos(
  $filter: ModelEmplyeeInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmplyeeInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
        date_applied
      }
    }
    nextToken
  }
}
`;
export const getAddress = `query GetAddress($id: ID!) {
  getAddress(id: $id) {
    address_id
    person_id
    line1
    line2
    postal_code
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
      address_id
      person_id
      line1
      line2
      postal_code
      state
    }
    nextToken
  }
}
`;
export const getAppliedJob = `query GetAppliedJob($id: ID!) {
  getAppliedJob(id: $id) {
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
export const listAppliedJobs = `query ListAppliedJobs(
  $filter: ModelAppliedJobFilterInput
  $limit: Int
  $nextToken: String
) {
  listAppliedJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getEmployerInfo = `query GetEmployerInfo($id: ID!) {
  getEmployerInfo(id: $id) {
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
export const listEmployerInfos = `query ListEmployerInfos(
  $filter: ModelEmployerInfoFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployerInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getPostedJob = `query GetPostedJob($id: ID!) {
  getPostedJob(id: $id) {
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
export const listPostedJobs = `query ListPostedJobs(
  $filter: ModelPostedJobFilterInput
  $limit: Int
  $nextToken: String
) {
  listPostedJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getTimeline = `query GetTimeline($id: ID!) {
  getTimeline(id: $id) {
    timeline_id
    company_id
    date
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
      timeline_id
      company_id
      date
      info
    }
    nextToken
  }
}
`;
