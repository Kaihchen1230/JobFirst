export const getAppliedJobEmployee = 
`query GetAppliedJobEmployee(
    $id: ID! 
    $appliedJobLimit: Int
    $appliedJobNextToken: String
) {
    getEmployee(id: $id) {
        appliedJob(
            limit: $appliedJobLimit
            nextToken: $appliedJobNextToken
        ) {
            items {
                Job {
                    id
                    jobTitle
                    datePosted
                    deadline
                }
                dateApplied
                status
            }
            nextToken
        }
    }
}`

export const getEducationEmployee = 
`query GetEducationEmployee(
    $id: ID! 
    $educationLimit: Int
    $educationNextToken: String
) {
    getEmployee(id: $id) {
        education(
            limit: $educationLimit
            nextToken: $educationNextToken
        ) {
            items {
                startYear
                endYear
                degree
                schoolName
                country
                city
            }
            nextToken
        }
    }
}`

// for testing purpose
export const getUsernameEmployee =
`query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
        username
    }
}`