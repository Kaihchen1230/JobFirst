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
    }
}`

export const getExperienceEmployee =
    `query GetExperienceEmployee(
    $id: ID! 
    $experienceLimit: Int
    $experienceNextToken: String
) {
    getEmployee(id: $id) {
        experience(
            limit: $experienceLimit
            nextToken: $experienceNextToken
        ) {
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
    }
}`

// for testing purpose
export const getUsernameEmployee =
    `query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
        username
    }
}`

export const getEmployeeAppliedSameJob = 
    `query EmployeeAppliedSameJob(
        $id: ID!
        $employeeAppliedSameJobimit: Int
        $employeeAppliedSameJobNextToken: String
    ){
        getPostedJob(id: $id){
            applied(
                limit: $employeeAppliedSameJobimit
                nextToken: $employeeAppliedSameJobNextToken
            ){
                items{
                    Employee{
                        id
                        firstName
                        age
                        address{
                            line1
                            line2
                            city
                            state
                            postalCode
                        }
                    }
                }
                nextToken
            }
        }
    }
    
    `