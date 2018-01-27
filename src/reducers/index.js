import { combineReducers } from 'redux';
import namesReducer from './reducer-names';


const allReducer = combineReducers({
    names: namesReducer
});

export default allReducer;