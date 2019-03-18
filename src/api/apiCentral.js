import {
  REGISTER_URL,
  LOGIN_URL,
  ADD_NOTE_URL,
  GET_ALL_NOTE_URL,
  DELETE_NOTE_URL,
  UPDATE_NOTE_URL
} from "../constant/constant";
import axios from "axios";

export default class APIs {
  // register new user
  registerUser = async (usn, pwd) => {
    console.log("u: " + usn + "\n" + pwd);
    try {
      let res = await axios
        .post(REGISTER_URL, {
          username: usn,
          password: pwd
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response;
        });

      return res;
    } catch (e) {
      console.log("Error: " + e); // undefined
      return e.response;
    }
  };

  userLogin = async (usn, pwd) => {
    try {
      let login = await axios
        .post(LOGIN_URL, {
          username: usn,
          password: pwd
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response.data;
        });

      return login;
    } catch (e) {
      return e.response;
    }
  };

  // Create new note
  addNewNote = async (title, desc) => {
    try {
      let add = await axios
        .post(ADD_NOTE_URL, {
          title: title,
          desc: desc
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response.data;
        });

      return add;
    } catch (e) {
      return e.response;
    }
  };

  // Get note
  getAllNote = async () => {
    try {
      let add = await axios
        .get(GET_ALL_NOTE_URL)
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response.data;
        });

      return add;
    } catch (e) {
      return e.response;
    }
  };

  // Get note
  deleteNote = async id => {
    try {
      let deleted = await axios
        .post(DELETE_NOTE_URL, {
          id: id
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response.data;
        });

      return deleted;
    } catch (e) {
      return e.response;
    }
  };

  updateNote = async (id, title, desc) => {
    try {
      let updated = await axios
        .post(UPDATE_NOTE_URL, {
          id: id,
          title: title,
          desc: desc
        })
        .then(response => {
          return response.data;
        })
        .catch(error => {
          return error.response.data;
        });

      return updated;
    } catch (e) {
      return e.response;
    }
  };
}
