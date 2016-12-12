/**
 * Created by user on 10.12.2016.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import gameReducer from '../reducers/gameReducer';
import loggerMiddleware from 'redux-logger';

const reducer = combineReducers({
	game: gameReducer
});

const store = createStore(reducer, applyMiddleware(
	loggerMiddleware()
));

export  default store;