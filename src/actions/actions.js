/**
 * Created by user on 10.12.2016.
 */
export function getReducersList() {
	const ADD_QUESTION = 'add-question';
	const CLOSE_ADMIN_PANEL = 'close-admin-panel';
	const CHECK_QUESTION = 'check-question';
	const CORRECT_ANSWER = 'correct-answer';
	const INCORRECT_ANSWER = 'incorrect-answer';
	const GAME_OVER_DEFEAT = 'game-over-defeat';

	return {
		ADD_QUESTION: ADD_QUESTION,
		CLOSE_ADMIN_PANEL: CLOSE_ADMIN_PANEL,
		CHECK_QUESTION: CHECK_QUESTION,
		CORRECT_ANSWER: CORRECT_ANSWER,
		INCORRECT_ANSWER: INCORRECT_ANSWER,
		GAME_OVER_DEFEAT: GAME_OVER_DEFEAT
	}
}

export function closeAdminPanel(){
	return {
		type: getReducersList().CLOSE_ADMIN_PANEL
	}
}

export function addQuestion(data){
	return {
		type: getReducersList().ADD_QUESTION,
		data: data
	}
}

export function checkQuestion(data){
	return {
		type: getReducersList().CHECK_QUESTION,
		data: data
	}
}