import { combineReducers } from 'redux'
import audioReducer from './audioReducer';

const rootReduce = combineReducers({
    audio : audioReducer,
})

export default rootReduce;