import {
    REGISTER_URL
} from '../constant/constant';
import axios from 'axios';

export default class APIs {
    // register new user 
    registerUser  = async (usn, pwd) => {
        console.log('u: ' + usn +'\n' + pwd );
        try {
            let res = await axios.post(REGISTER_URL, {
                username: usn,
                password: pwd
            })
            .then(response => { 
                console.log("Data return: " + response)
            })
            .catch(error => {
                console.log("Response error: " + error.response)
            });
          } catch (e) {
            console.log("Error: " + e.response) // undefined
          }
        
    }

   
}