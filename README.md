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
## About:
JobFirst is a web app which utilizes _Gatsby_ to serve the frontend and _AWS Amplify_ to serve the backend. And blah blah blah....
## [Refer here for our weekly meeting status](https://github.com/Kaihchen1230/csc47300Project/wiki/Weekly-Status-Meeting-PPT)
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
</br>__USE A DIFFERENT ENV__
</br>__USE A DIFFERENT ENV__
</br> You can name it as _younameenv_ ex: _alanenv_
</br>__USE YOUR OWN PROFILE__
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
</br>__USE THE EXISTING ENV FROM PREV SECTION STEP 10__
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
