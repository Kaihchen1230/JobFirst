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

    console.log('this is the appliedJobId: ', appliedJobId);
    console.log('this is the status: ', status);
    let updatedAppliedJobResult;
    try{
        const updateAppliedJobInput = {
            id: appliedJobId,
            status: status
        };
        updatedAppliedJobResult = await API.graphql(graphqlOperation(updateAppliedJob, {input: updateAppliedJobInput}));
        console.log('this is updatedAppliedJobResult: ', updatedAppliedJobResult);
    }catch(err){
        updatedAppliedJobResult = 'error';
        console.log('go here');
        console.log('there is an error to change the status of the employee: ', err);
        
    }finally{
        console.log('final here');
        console.log('this is the updatedAppliedJobResult: ', updatedAppliedJobResult);
        return updatedAppliedJobResult;
    }
    
}