// Reducers 
import noteReducer  from '../reducers/noteReducer';

import {createStore} from 'redux';

const store = createStore(noteReducer);

export{store};

