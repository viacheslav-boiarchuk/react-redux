/**
 * Created by user on 20.12.2016.
 */
import {getReducersList} from '../actions/actions';

const scoreArray = [100,200,300,500,1000,2000,4000,8000,16000,32000,64000,125000,250000,500000,1000000];

const initialState = {
	activeQuestion: 1,
	score: 0,
	mistakes: 0
};

export default function(state = initialState ,action){
	switch (action.type) {
		default:
			return {...state}
	}
}