import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import CommonView from './component/commonView';

class App extends Component {
	render() {
		return (
				<Provider store={store} >
					<div className="App">
						<CommonView />
					</div>
				</Provider>
		);
	}
}

window.store = store;

export default App;
