// import axios from 'axios';

// export const setGreeting = (greeting) => ({
//   type: 'SET_GREETING',
//   payload: greeting,
// });

// export const fetchGreeting = () => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.get('http://localhost:3000/greeting');
//       console.log(response.data.greeting)
//       dispatch(setGreeting(response.data.greeting));
//     } catch (error) {
//       // Handle error
//       console.log(error);
//     }
//   };
// };




// import axios from 'axios';

// export const setGreeting = (greeting) => ({
//   type: 'SET_GREETING',
//   payload: greeting,
// });

// export const getGreeting = () => (dispatch) => {
//   axios.get('http://localhost:3000/greeting')
//     .then((response) => {
//       dispatch(setGreeting(response.data.greeting));
//       console.log(response.data.greeting)
//     })
//     .catch((error) => error);
// };




import axios from 'axios';

export const setRandomGreeting = (greeting) => ({
  type: 'SET_RANDOM_GREETING',
  payload: greeting,
});

export const getRandomGreeting = () => (dispatch) => {
  axios.get('/random_greeting')
    .then((response) => {
      dispatch(setRandomGreeting(response.data.greeting));
    })
    .catch((error) => error);
};

