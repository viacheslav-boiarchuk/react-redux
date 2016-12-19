/**
 * Created by user on 10.12.2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';

class GamePanel extends Component {
	render() {
		return (
			<div className="game-panel">
				{this.props.questions.map((item) =>
					<div id="question_answer">
						<div key="question" className="question">
							<p id="question">
								<label>{item.question}</label>
							</p>
						</div>
						<div key="ans" className="ans">
							<ul className="ans-list">
								{item.answers.map((item, counter) =>
									<li key={counter} className={"ans_" + counter}>
										<label htmlFor="">
											<a href="#" className="answer">{item.text}</a>
										</label>
									</li>)
								}
							</ul>
						</div>
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