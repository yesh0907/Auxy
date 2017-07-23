import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const UPDATE_RECORDS = 'UPDATE_RECORDS';
export const CREATE_RECORD = 'CREATE_RECORD';
export const CREATE_DIAGNOSIS = 'CREATE_DIAGNOSIS';
export const UPDATE_DIAGNOSIS = 'UPDATE_DIAGNOSIS';
export const UPDATE_SYMPTOM = 'UPDATE_SYMPTOM';
export const UPDATE_SYMPTOMS = 'UPDATE_SYMPTOMS';
export const FETCH_DIAGNOSIS = 'FETCH_DIAGNOSIS';
export const FETCH_ALL_SYMPTOMS = 'FETCH_ALL_SYMPTOMS';
export const FETCH_TRIAGE = 'FETCH_TRIAGE';
export const DIAGNOSE = 'DIAGNOSE';
export const DIAGNOSE_AFTER_QUESTIONS = 'DIAGNOSE_AFTER_QUESTIONS';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';

const CONFIG = {
    headers: {'Content-Type': 'application/json'}
}

export function createRecord(condition, created_by, symptoms) {
    return (dispatch) => {
        const record = {condition, created_by, symptoms};
        axios.post(`https://auxy-ahsg.herokuapp.com/record`, record, CONFIG);
        dispatch(updateRecords(record));
    }
}

export function createDiagnosis(evidence, sex, age) {
    const diag = {sex, age, evidence};
    return {
        type: CREATE_DIAGNOSIS,
        payload: diag
    }
}

export function diagnose(evidence, sex, age) {
    return (dispatch) => {
        dispatch(updateSymptoms(evidence));
        dispatch(createDiagnosis(evidence, sex, age));
    }
}

export function diagnoseAfterQuestions(symptom, evidence, diag) {
    return (dispatch) => {
        dispatch(updateSymptom(symptom))
        .then(() => {
            dispatch(createDiagnosis(evidence));
            dispatch(fetchDiagnosis(diag));
        });
    }
}

export function updateRecords(record) {
    return {
        type: UPDATE_RECORDS,
        payload: record
    }
}

export function updateDiagnosis(payload) {
    return {
        type: UPDATE_DIAGNOSIS,
        payload
    }
}

export function updateSymptom(payload) {
    return {
      type: UPDATE_SYMPTOM,
      payload
    }
  }

export function updateSymptoms(payload) {
    return {
        type: UPDATE_SYMPTOMS,
        payload
    }
}

export function updateQuestion(payload) {
    return {
        type: UPDATE_QUESTION,
        payload
    }
}

export function fetchDiagnosis(diag) {
    console.log("D:", diag);
    return (dispatch) => {
        const payload = axios.post(`https://auxy-ahsg.herokuapp.com/diagnosis/diagnose`, diag, CONFIG)
        
        dispatch(updateQuestion(payload));
    }
}

export function fetchAllSymptoms() {
    return {
        type: FETCH_ALL_SYMPTOMS,
        payload: axios.get(`https://auxy-ahsg.herokuapp.com/diagnosis/symptoms`, CONFIG)
    }
}

export function fetchTriage(evidence) {
    return {
        type: FETCH_TRIAGE,
        payload: axios.post(`https://auxy-ahsg.herokuapp.com/diagnosis/triage`, evidence, CONFIG)
    }
}

export function fetchUser(id) {
    return {
        type: FETCH_USER,
        payload: axios.get(`https://auxy-ahsg.herokuapp.com/users/${id}`, CONFIG)
    };
}