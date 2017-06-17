import { FETCH_USER, UPDATE_RECORDS } from '../actions';

const initialState = {
  user_id: 1,
  name: '',
  records: [],
  sex: '',
  age: 0
};

export default function diagnosis(state=initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      const data = action.payload.data;
      return {
        ...state,
        name: data.name,
        sex: data.sex,
        age: data.age,
        records: data.records
      }
    case UPDATE_RECORDS:
      return {
        ...state,
<<<<<<< HEAD
        records: state.records.push(action.payload)
=======
        records: records.push(action.payload)
>>>>>>> 0557c6bcd91595e0d5524e8ab9a29943016bfc4f
      }
    default:
      return state;
  }
}
