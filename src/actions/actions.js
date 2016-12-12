/**
 * Created by user on 10.12.2016.
 */
export function getReducersList() {
	const ADD_QUESTION = 'add-question';
	const CLOSE_ADMIN_PANEL = 'close-admin-panel';

	return {
		ADD_QUESTION: ADD_QUESTION,
		CLOSE_ADMIN_PANEL: CLOSE_ADMIN_PANEL,
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