/**
 * Created by user on 10.12.2016.
 */
import {getReducersList} from '../actions/actions';

const initialGameState = {
	questions: [],
	adminPanel: true
};

export default function(state = initialGameState ,action){
	switch (action.type) {
		case getReducersList().ADD_QUESTION:
			return {
				...state,
				questions: [...state.questions, action.data]
			};
		case getReducersList().CLOSE_ADMIN_PANEL:
			return {
				...state,
				adminPanel: false
			};
		default:
			return {...state}
	}
}