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
export const FETCH_SHORTEST = 'FETCH_SHORTEST';
export const FETCH_KTPH = 'FETCH_KTPH';
export const FETCH_TTSH = 'FETCH_TTSH';

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
  return (dispatch) => {
    const record = {condition, created_by, symptoms};
    axios.post(`https://auxy-ahsg.herokuapp.com/record`, record, CONFIG);
    dispatch(updateRecords(record));
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

export function updateDiagnosis(diag) {
  return {
    type: UPDATE_DIAGNOSIS,
    payload: diag
  }
}

export function fetchTriage(evidence) {
  return {
    type: FETCH_TRIAGE,
    payload: axios.post(`https://auxy-ahsg.herokuapp.com/diagnosis/triage`, evidence, CONFIG)
  }
}

export function updateQuestion(diag) {
  return {
    type: UPDATE_QUESTION,
    payload: diag["question"]
  }
}

export function fetchAllSymptoms() {
  return {
    type: FETCH_ALL_SYMPTOMS,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/diagnosis/symptoms`, CONFIG)
  }
}

export function fetchShortest() {
  return {
    type: FETCH_SHORTEST,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/scrape/shortest`, CONFIG)
  }
}

export function fetchKTPH() {
  return {
    type: FETCH_KTPH,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/scrape/ktph`, CONFIG)
  }
}

export function fetchTTSH() {
  return {
    type: FETCH_TTSH,
    payload: axios.get(`https://auxy-ahsg.herokuapp.com/scrape/ttsh`, CONFIG)
  }
}
