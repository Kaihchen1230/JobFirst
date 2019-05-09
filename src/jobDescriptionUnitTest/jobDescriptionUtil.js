// import * as mutations from '../graphql/mutations';
const {API, graphqlOperation} = require('aws-amplify');
const { updateAppliedJob } = require('../graphql/mutations');

exports.loadingStatus = (status) => {
    return status;
};

exports.visibleStatus = (status) => {
    return status;
}

exports.updateJobStatus = async (appliedJobId, status) => {

    let updatedAppliedJobResult;
    try{
        const updateAppliedJobInput = {
            id: appliedJobId,
            status: status
        };
        updatedAppliedJobResult = await API.graphql(graphqlOperation(updateAppliedJob, {input: updateAppliedJobInput}));

    }catch(err){
        updatedAppliedJobResult = 'error';
        console.log('there is an error to change the status of the employee: ', err);
        
    }finally{
        return updatedAppliedJobResult;
    }
    
}