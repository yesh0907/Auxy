import { FETCH_USER } from '../actions';

const initialState = {
  user_id: 1,
  name: '',
  records: [],
  sex: '',
  age: 0
};

export default function diagnosis(state=initialState, action) {
  switch (action.type) {
    case GET_USER:
      const data = action.payload.data;
      return {
        ...state,
        name: data.name,
        sex: data.sex,
        age: data.age,
        records: data.records
      }
    default:
      return state;
  }
}
