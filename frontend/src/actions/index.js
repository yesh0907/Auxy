import axios from 'axios';

export const GET_USER = 'GET_USER';

export function getUser(id) {
  return {
    type: GET_USER,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/users/${id}`)
  };
}
