# CSC473 Project (Under Construction)
# JobFirst
By: 
__Gong Qi Chen__ _(product manager)_
__Kai Hang Chen__ _(scrum master)_
__Jie Lan__ _(developer)_
__Siddharth Rajan__ _(developer)_
__Alan Lau__ _(developer)_
</br>
</br>
## Background:
 JobFirst is employment-related search website that makes a connection between employer and skilled new immigrants who can speak Chinese and tries to find a job but couldn't do so due to language and cultural barriers. The interface will be in bilingual(English & Mandarin), allowing the user easier to use. On the website, a credential converter can be provided that helps customers understand what their degree means in the new country.

## Tools Used:
1. _Gatsby_
2. _AWS cognito_
3. _AWS appsync_
4. _AWS S3_

## Refer here for our website
https://master.d311enjx0cy8vf.amplifyapp.com/
___

## How to get started:
1. clone the repo ```git clone https://github.com/Kaihchen1230/csc47300Project.git```
1. install all the dependencies ```npm install```
1. setup backend ```amplify init```
1. push the backend to the cloud ```ampify push```
1. run the app ```gatsby develop```

___
## For the developers:
- __READ FIRST__
### Fresh start: (RECOMMENDED)
1. Delete your local
1. Delete your repo
1. Fork from [Kai](https://github.com/Kaihchen1230/csc47300Project.git)
1. __(optional)__ On the github repo, delete the unnessascery branch such as:
    1. _frontend-branch_
    1. _local-branch_ (I believe this is where Kai write his code)
1. On the github repo, set _newFrontend_ as the default branch
1. ```git clone [your own repo link]```
1. ```git branch``` you should be in _newFrontend_ branch
1. ```npm install``` install the dependencies
1. __(optional)__ ```amplify configure``` create a IAM role for this project __SAVE THE ACCESS ID AND ACCESS KEY__
1. ```amplify init``` initialize the amplify backend
</br>__USE A DIFFERENT ENV__
</br> You can name it as _younameenv_ ex: _alanenv_
</br>__USE YOUR OWN PROFILE__
</br>You can find [more information here](https://aws-amplify.github.io/docs/cli/init?sdk=js) about amplify command. If you have created too many profiles you can also find the file where your profiles are being recorded and then delete 'em.
1. ```amplify push``` so your backend will be in the cloud
1. Begin coding...

### Adding new Amplify service:
- In this example I will be adding an API
1. ```git pull upstream whateverbranchweuse``` Get the latest update from upstream. We probably use the _newFrontend_ branch. So all of our pull requeast will go to _newFrontend_.
1. ```npm install``` run this after every pull from the upstream
1. ```amplify init``` to sync with the backend from upstream because someone else might add something to the backend already.
</br>__USE THE EXISTING ENV FROM PREV SECTION STEP 10__
</br>So it should be _yournameenv_
1. ```amplify push``` now your backend should be the same front upstream and when you run ```gatsby develop``` it should be working
1. ```amplify add api``` to add the service that you want to add. In this case, it's api
1. ```amplify push``` Set it up according your needs:
    - define the schema
    - write custom graphql
    - etc...
1. __test it out to see if your backend is working__
1. ```git push``` Push it to your repo to make pull request.
1. Create the pull request.

### Testing:
```npm test``` or ```npm test -- -- watch```

### Developer Document:
```npm run doc``` All docs are inside the docs folder
[Refer here for how to write jsdoc](https://www.akshatsharma.com/posts/how%20to%20jsdoc/index.html#simian-toc-8)

### File Structure
```
.
├── amplify
│   ├── #current-cloud-backend
│   │   ├── api
│   │   │   └── csc47300project
│   │   │       ├── build
│   │   │       │   ├── resolvers
│   │   │       │   └── stacks
│   │   │       └── stacks
│   │   ├── auth
│   │   │   └── cognitoed11de21
│   │   └── storage
│   │       └── csc473storage
│   └── backend
│       ├── api
│       │   └── csc47300project
│       │       ├── build
│       │       │   ├── resolvers
│       │       │   └── stacks
│       │       └── stacks
│       ├── auth
│       │   └── cognitoed11de21
│       ├── awscloudformation
│       └── storage
│           └── csc473storage
├── docs
│   ├── fonts
│   ├── scripts
│   │   └── prettify
│   └── styles
├── mocks
├── node_modules [1620 entries exceeds filelimit, not opening dir]
├── public
│   ├── businessImages
│   └── static
│       └── d [21 entries exceeds filelimit, not opening dir]
├── src
│   ├── components
│   │   ├── Home
│   │   ├── authentication
│   │   ├── business_profile
│   │   │   └── test
│   │   │       └── __snapshots__
│   │   ├── dictionary
│   │   ├── form
│   │   ├── jobList
│   │   ├── job_description
│   │   ├── talent_list
│   │   └── user_profile
│   ├── customGraphql
│   ├── graphql
│   ├── pages
│   ├── services
│   ├── style
│   └── test
│       ├── integrationTest
│       │   └── __snapshots__
│       ├── jobDescriptionUnitTest
│       ├── jobListUnitTest
│       ├── systemTest
│       └── userProfileUnitTest
└── static
    └── businessImages

62 directories
```
#### Above is all the directories in our __root__ folder:
- __*amplify*__ is where all of our backend files located
- __*docs*__ is where all the generated html documents located
- __*src*__ is where mainly our code located
- __*static*__ is where all the static files like images located

```
src
├── components
│   ├── Home
│   ├── authentication
│   ├── business_profile
│   │   └── test
│   │       └── __snapshots__
│   ├── dictionary
│   ├── form
│   ├── jobList
│   ├── job_description
│   ├── talent_list
│   └── user_profile
├── customGraphql
├── graphql
├── pages
├── services
├── style
└── test
    ├── integrationTest
    │   └── __snapshots__
    ├── jobDescriptionUnitTest
    ├── jobListUnitTest
    ├── systemTest
    └── userProfileUnitTest

24 directories
```
#### Above is all the directories in our __src__ folder:
- __*components*__ is where all the components located, categorized by the page where they belong
- __*customGraphql*__ is where all the custom Graphql query located
- __*graphql*__ is where all the generated query located
- __*pages*__ contain all the codes for all the pages of our application
- __*services*__ contain some functions for authentication and translation feaature