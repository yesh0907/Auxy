import axios from 'axios';

export const FETCH_USER = 'FETCH_USER';
export const UPDATE_RECORDS = 'UPDATE_RECORDS';
export const CREATE_RECORD = 'CREATE_RECORD';
export const CREATE_DIAGNOSIS = 'CREATE_DIAGNOSIS';
export const FETCH_DIAGNOSIS = 'FETCH_DIAGNOSIS';
export const UPDATE_DIAGNOSIS = 'UPDATE_DIAGNOSIS';
export const FETCH_TRIAGE = 'FETCH_TRIAGE';
export const UPDATE_QUESTION = 'UPDATE_QUESTION';
export const FETCH_ALL_SYMPTOMS = 'FETCH_ALL_SYMPTOMS';

const CONFIG = {
  headers: {'Content-Type': 'application/json'}
}

export function fetchUser(id) {
  return {
    type: FETCH_USER,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/users/${id}`, CONFIG)
  };
}

export function updateRecords(record) {
  return {
    type: UPDATE_RECORDS,
    payload: record
  }
}

export function createRecord(condition, created_by, symptoms) {
  const record = {condition, created_by, symptoms};

  return {
    type: CREATE_RECORD,
    payload: axios.post(`https://auxy-ahsg.herokuapp.com/record`, record, CONFIG)
  }
}

export function createDiagnosis(sex, age, evidence) {
  const diag = {sex, age, evidence};

  return {
    type: CREATE_DIAGNOSIS,
    payload: diag
  }
}

export function fetchDiagnosis(diag) {
  return (dispatch) => {
    const payload = axios.post(`https://auxy-ahsg.herokuapp.com/diagnosis/diagnose`, diag, CONFIG)

    dispatch(updateDiagnosis(payload.data));
    dispatch(updateQuestion(payload.data["question"]))
  }
}

export function updateDiagnosis(evidence) {
  return {
    type: UPDATE_DIAGNOSIS,
    payload: evidence
  }
}

export function fetchTriage(evidence) {
  return {
    type: FETCH_TRIAGE,
    payload: axios.post(`https://auxy-ahsg.herokuapp.com/diagnosis/triage`, evidence, CONFIG)
  }
}

export function updateQuestion(evidence) {
  return {
    type: UPDATE_QUESTION,
    payload: evidence["question"]
  }
}

export function fetchAllSymptoms() {
  return {
    type: FETCH_ALL_SYMPTOMS,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/diagnosis/symptoms`, CONFIG)
  }
}
