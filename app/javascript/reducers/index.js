// import { combineReducers } from 'redux';

// const greetingReducer = (state = { greeting: '' }, action) => {
//   switch (action.type) {
//     case 'SET_GREETING':
//       return { ...state, greeting: action.payload };
//     default:
//       return state;
//   }
// };

// const rootReducer = combineReducers({
//   greeting: greetingReducer,
// });

// export default rootReducer;



import { combineReducers } from 'redux';
import greetingReducer from './greetingReducer';

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;


