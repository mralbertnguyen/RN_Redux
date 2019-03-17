
import {combineReducers}  from 'redux';

const INITIAL_STATE = {
    current: [],
    list: [
        {
            "id": 1,
            "title": "Test title",
            "desc": "desc test",
            "creator": null,
            "created_at": "2019-03-17 06:20:19",
            "updated_at": "2019-03-17 06:20:19"
        },
        {
            "id": 2,
            "title": "Test title",
            "desc": "desc test",
            "creator": null,
            "created_at": "2019-03-17 06:45:20",
            "updated_at": "2019-03-17 06:45:20"
        },
        {
            "id": 3,
            "title": "Test title",
            "desc": "desc test",
            "creator": null,
            "created_at": "2019-03-17 06:45:34",
            "updated_at": "2019-03-17 06:45:34"
        },
    ],
  };

const noteReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default : 
        return state;
    }
}

export default combineReducers( {
    notes: noteReducer
})
