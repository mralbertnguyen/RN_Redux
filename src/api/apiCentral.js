import {
    REGISTER_URL
} from '../constant/constant';

export default class APIs {
    // register new user 
    registerUser  = (usn, pwd) => {
        fetch(REGISTER_URL,{
            method : 'POST',
            body : JSON.stringify({
                username : usn,
                password : pwd
            } ),
        }).then((response) => {
            console.log("response" + response);
        })
        .then((resultResponse) => {
            console.log("Result" + resultResponse);
            return resultResponse;
        }).done();
    }
}