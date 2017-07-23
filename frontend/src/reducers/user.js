import { FETCH_USER, UPDATE_RECORDS } from '../actions';

const initialState = {
  id: 1,
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
        records: state.records.push(action.payload)
      }
    default:
      return state;
  }
}
