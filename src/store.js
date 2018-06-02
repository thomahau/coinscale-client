import { createStore } from 'redux';
import { coinscaleReducer } from './reducers/reducers';

export default createStore(coinscaleReducer);
