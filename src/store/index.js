import {createStore} from 'redux';
import  rootsReducer  from './modules/reserve/rootsReducer';

const store = createStore(rootsReducer);

export default store;