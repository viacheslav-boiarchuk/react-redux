import React, { Component } from 'react';
import {connect} from 'react-redux';
import AdminPanel from './adminPanel';
import GamePanel from './gamePanel';
import store from '../store/index';
import logo from '../../images/logo.jpg';
import AsideStepPanel from './asideStepPanel';

class CommonView extends Component {
	render() {
		console.log(this.props);
		return (
			<div className="millioner-app">
				<img src={logo} alt="logo"/>
				{store.getState().game.adminPanel ? <AdminPanel /> :
					<div className="game-container">
						<GamePanel />
						<AsideStepPanel />
					</div>
				}
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			adminPanel: state.game.adminPanel
		}
	},
	{}
)(CommonView);