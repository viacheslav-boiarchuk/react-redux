/**
 * Created by user on 21.12.2016.
 */
import store from '../store/index';

function checkAnswer(data) {
	return data === store.getState().adminBoard.questions[store.getState().userBoard.activeQuestion].correctAnswer;
}

export default checkAnswer;