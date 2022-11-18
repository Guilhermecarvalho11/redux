import {createStore, applyMiddleware} from 'redux';
import  rootsReducer  from './modules/reserve/rootsReducer';
import createSagaMiddleware from 'redux-saga';
import  rootSaga  from './modules/rootSaga';


const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);


const store = createStore(rootsReducer, enhancer);

sagaMiddleware.run(rootSaga);



export default store;