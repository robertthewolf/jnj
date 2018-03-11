import { combineReducers } from 'redux';

import language from './reducer';

const rootReducer = combineReducers({
    language,
});

export default rootReducer;