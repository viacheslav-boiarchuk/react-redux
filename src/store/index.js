/**
 * Created by user on 10.12.2016.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import backendGameReducer from '../reducers/backendGameReducer';
import frontendGameReducer from '../reducers/frontendGameReducer';
import loggerMiddleware from 'redux-logger';

const reducer = combineReducers({
	game: backendGameReducer,
	frontPartGame: frontendGameReducer
});

const store = createStore(reducer, applyMiddleware(
	loggerMiddleware()
));

export  default store;