import {
  CREATE_DIAGNOSIS,
  UPDATE_DIAGNOSIS,
  UPDATE_SYMPTOMS,
  FETCH_TRIAGE,
  UPDATE_QUESTION,
  FETCH_ALL_SYMPTOMS,
  FETCH_SHORTEST,
  FETCH_KTPH,
  FETCH_TTSH,
  UPDATE_SEARCH
} from '../actions';

const initialState = {
  search: '',
  currentDiagnosis: {},
  allSymptoms: {},
  symptoms: [],
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
    case UPDATE_SYMPTOMS:
      return {
        ...state,
        symptoms: action.payload
      }
    case FETCH_TRIAGE:
      let data = action.payload.data;
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
      data = action.payload.data;
      return {
        ...state,
        allSymptoms: data
      }
    case FETCH_SHORTEST:
      data = action.payload.data;
      return {
        ...state,
        shortest: data
      }
    case FETCH_KTPH:
      data = action.payload.data;
      return {
        ...state,
        ktph: data
      }
    case FETCH_TTSH:
      data = action.payload.data;
      return {
        ...state,
        ttsh: data
      }
    case UPDATE_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state;
  }
}
