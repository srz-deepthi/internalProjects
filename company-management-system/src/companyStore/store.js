import { createStore, applyMiddleware } from 'redux'
import CompanyReducer from '../companyRedux/companyReducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from '../saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const Store = createStore(
    CompanyReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default Store