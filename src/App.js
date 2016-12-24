import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import CommonPanel from './component/commonPanel';

class App extends Component {
	render() {
		return (
				<Provider store={store} >
					<div className="App">
						<CommonPanel />
					</div>
				</Provider>
		);
	}
}

window.store = store;

export default App;
