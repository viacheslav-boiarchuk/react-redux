/**
 * Created by user on 20.12.2016.
 */
import {getReducersList} from '../actions/actions';
import store from '../store/index';

export const scoreArray = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000, 64000, 125000, 250000, 500000, 1000000];

const initialState = {
	activeQuestion: 0,
	score: 0,
	mistakes: 0,
	defeat: false
};

export default function (state = initialState, action) {
	switch (action.type) {
		case getReducersList().CORRECT_ANSWER:
			const tempQuestion = store.getState().userBoard.activeQuestion + 1;
			return {
				...state,
				activeQuestion: tempQuestion,
				score: scoreArray.score[state.activeQuestion]
			};
		case getReducersList().INCORRECT_ANSWER:
			console.log(state);
			const tempMistakes = store.getState().userBoard.mistakes + 1;
			return {
				...state,
				mistakes: tempMistakes
			};
		case getReducersList().GAME_OVER_DEFEAT:
			return {
				...state,
				defeat: true
			};
		default:
			return {...state}
	}
}