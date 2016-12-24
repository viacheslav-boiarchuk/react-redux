/**
 * Created by user on 29.08.2016.
 */
import {getReducersList} from '../actions/actions';
import checkAnswer from '../services/checkCorrectAnswer';
import checkMistakes from '../services/checkMistakes';
import store from '../store/index';

const frontEndMiddleWares = store => next => {
	return action => {
		switch (action.type) {
			case getReducersList().CHECK_QUESTION:
				if (checkAnswer(action.data)) {
					store.dispatch({
						type: getReducersList().CORRECT_ANSWER
					})
				}
				else {
					store.dispatch({
						type: getReducersList().INCORRECT_ANSWER
					});
					alert('error!');
					console.log(checkMistakes());
					if (checkMistakes()) {
						alert('GAME OVER');
						store.dispatch({
							type: getReducersList().GAME_OVER_DEFEAT
						});
					}
				}
				return next(action);
			default:
				return next(action);
		}
	};
};

export default frontEndMiddleWares;