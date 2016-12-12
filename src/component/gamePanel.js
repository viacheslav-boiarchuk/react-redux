/**
 * Created by user on 10.12.2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

class GamePanel extends Component {
	render() {
		return (
			<div>
				{this.props.questions.map((item) =>
					<div className="questions-list">
						<h1>{item.question}</h1>
						<ul>
							{item.answers.map((item) => <li>{item.text}</li>)}
						</ul>
					</div>
				)}
			</div>
		)
	}
}

export default connect(
	state => {
		return {
			questions: state.game.questions
		}
	},
	{}
)(GamePanel);