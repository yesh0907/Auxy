import _ from 'lodash';
import {
    CREATE_DIAGNOSIS,
    UPDATE_SYMPTOMS,
    UPDATE_QUESTION,
    FETCH_TRIAGE,
    FETCH_ALL_SYMPTOMS,
    REMOVE_LATEST_SYMPTOM,
} from '../actions';

const initialState = {
    currentDiagnosis: {},
    allSymptoms: [],
    symptoms: [],
    question: {},
    condition: [],
    triage_level: '',
    serious: []
};

export default function diagnosis(state=initialState, action) {
    let data;
    switch (action.type) {
        case CREATE_DIAGNOSIS:
            return {
                ...state,
                currentDiagnosis: action.payload
            }
        case UPDATE_SYMPTOMS:
            return {
                ...state,
                symptoms: action.payload
            }
        case UPDATE_QUESTION:
            data = action.payload.data;
            if (data["conditions"][0]["probability"] >= 0.4) {
                // console.log("setting");
                return {
                    ...state,
                    condition: data["conditions"]
                }
            }
            return {
                ...state,
                question: data["question"]
            }
        case FETCH_TRIAGE:
            data = action.payload.data;
            return {
                ...state,
                triage_level: data["triage_level"],
                serious: data["serious"]
            }
        case FETCH_ALL_SYMPTOMS:
            data = action.payload.data;
            return {
                ...state,
                allSymptoms: _.values(data)
            }
        default:
            return state;
    }
}
