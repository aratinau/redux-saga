import { createStore, applyMiddleware } from 'redux'
import {notesReducer} from './notesReducer'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(notesReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

/*
    rootSaga.js contient

    export function* rootSaga() {
          yield fork(loadNotesWatcher)
          yield fork(saveNotesWatcher)
    }

    yield fonctionne comme un return mais fait pause dans l'execution et continue ensuite

    1 : store
    2 : rootSaga
    3 : loadNotesSaga et saveNotesSaga
*/
