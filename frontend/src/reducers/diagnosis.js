import {
  CREATE_DIAGNOSIS,
  UPDATE_DIAGNOSIS,
  FETCH_TRIAGE,
  UPDATE_QUESTION,
  FETCH_ALL_SYMPTOMS,
  FETCH_SHORTEST,
  FETCH_KTPH,
  FETCH_TTSH
} from '../actions';

const initialState = {
  value: '',
  currentDiagnosis: {},
  allSymptoms: {},
  symptoms: {},
  evidence: [],
  question: {},
  conditions: [],
  triage_level: '',
  serious: [],
  shortest: '',
  ktph: {},
  ttsh: {}
};

export default function diagnosis(state=initialState, action) {
  switch (action.type) {
    case CREATE_DIAGNOSIS:
      return {
        ...state,
        currentDiagnosis: action.payload
      }
    case UPDATE_DIAGNOSIS:
      return {
        ...state,
        currentDiagnosis: action.payload
      }
    case FETCH_TRIAGE:
<<<<<<< HEAD
      let data = action.payload.data;
=======
      const data = action.payload.data;
>>>>>>> 0557c6bcd91595e0d5524e8ab9a29943016bfc4f
      return {
        ...state,
        triage_level: data["triage_level"],
        serious: data["serious"]
      };
    case UPDATE_QUESTION:
      return {
        ...state,
        question: action.payload
      }
    case FETCH_ALL_SYMPTOMS:
<<<<<<< HEAD
      data = action.payload.data;
=======
      const data = action.payload.data;
>>>>>>> 0557c6bcd91595e0d5524e8ab9a29943016bfc4f
      return {
        ...state,
        allSymptoms: data
      }
    case FETCH_SHORTEST:
<<<<<<< HEAD
      data = action.payload.data;
=======
      const data = action.payload.data;
>>>>>>> 0557c6bcd91595e0d5524e8ab9a29943016bfc4f
      return {
        ...state,
        shortest: data
      }
    case FETCH_KTPH:
<<<<<<< HEAD
      data = action.payload.data;
=======
      const data = action.payload.data;
>>>>>>> 0557c6bcd91595e0d5524e8ab9a29943016bfc4f
      return {
        ...state,
        ktph: data
      }
    case FETCH_TTSH:
<<<<<<< HEAD
      data = action.payload.data;
=======
      const data = action.payload.data;
>>>>>>> 0557c6bcd91595e0d5524e8ab9a29943016bfc4f
      return {
        ...state,
        ttsh: data
      }
    default:
      return state;
  }
}
