/**
 * Created by user on 10.12.2016.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import backendGameReducer from '../reducers/backendGameReducer';
import frontendGameReducer from '../reducers/frontendGameReducer';
import loggerMiddleware from 'redux-logger';
import frontEndMiddleWares from '../middlewares/frontEndMiddleWare';

const reducer = combineReducers({
	adminBoard: backendGameReducer,
	userBoard: frontendGameReducer
});

const store = createStore(reducer, applyMiddleware(
		frontEndMiddleWares, loggerMiddleware()
));

export  default store;