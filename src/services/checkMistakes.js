import store from '../store/index';

function checkMistakes() {
	return store.getState().userBoard.mistakes === 3;
}

export default checkMistakes;