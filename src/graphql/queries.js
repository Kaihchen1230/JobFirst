// eslint-disable
// this is an auto generated file. This will be overwritten

export const getBusinessProfile = `query GetBusinessProfile($id: ID!) {
  getBusinessProfile(id: $id) {
    id
    business_name
    description
    business_picture
    business_email
    business_phone_number
    Business_location
    timeline
  }
}
`;
export const listBusinessProfiles = `query ListBusinessProfiles(
  $filter: ModelbusinessProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinessProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      business_name
      description
      business_picture
      business_email
      business_phone_number
      Business_location
      timeline
    }
    nextToken
  }
}
`;
