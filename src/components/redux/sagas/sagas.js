// src/redux/sagas/index.js
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchBranchesApi, fetchDepartmentsApi, fetchEventsApi } from '../../services/api';

function* fetchBranches() {
  const branches = yield call(fetchBranchesApi);
  yield put({ type: 'SET_BRANCHES', branches });
}

function* fetchDepartments(action) {
  const departments = yield call(fetchDepartmentsApi, 1);
  yield put({ type: 'SET_DEPARTMENTS', departments });
}


function* fetchEvents(action) {
  const events = yield call(fetchEventsApi, 1);
  yield put({ type: 'SET_EVENTS', events });
}

function* rootSaga() {
  yield takeEvery('FETCH_BRANCHES', fetchBranches);
  yield takeEvery('FETCH_DEPARTMENTS', fetchDepartments);
  yield takeEvery('FETCH_EVENTS', fetchEvents);
  
}


export default rootSaga;
