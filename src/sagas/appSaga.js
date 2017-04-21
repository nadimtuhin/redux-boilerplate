import { takeEvery, put } from 'redux-saga/effects';

export function* sampleAsync({ payload }) {

}

export function* watchSampleAction() {
  yield takeEvery('SAMPLE_ACTION', sampleAsync);
}

export default function* appSaga() {
  yield [
    watchSampleAction()
  ];
}
