import {
    REGISTER_URL,
    LOGIN_URL
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
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });

            return res;

          } catch (e) {
            console.log("Error: " + e.response) // undefined
            return e.response;
          }
        
    }

    userLogin = async (usn, pwd) => {
        try{
            let login = await axios.post(LOGIN_URL,{
                username : usn,
                password : pwd
            })
            .then( response => {
                return response.data;
            }).catch(error =>{
                return error.response.data
            });

            return login;
        }catch(e){
            return e.response;
        }
    }

   
}