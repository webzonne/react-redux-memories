import { combineReducers } from "redux";

import posts from './posts'

export default combineReducers({posts:posts});

// const initializer = []

// const reducer = (state=initializer, action)=>{
//     switch (action.type) {
//         case 'FETCH_ALL':
//             return action.payload
//         case 'CREATE':  
//             return state
//         default:
//             return state     
//     }
// }

// export default reducer;