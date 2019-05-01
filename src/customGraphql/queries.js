export const getAppliedJobEmployee = 
`query GetEmployee(
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
// for testing purpose
export const getUsernameEmployee =
`query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
        username
    }
}`