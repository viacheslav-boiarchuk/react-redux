/**
 * Created by user on 10.12.2016.
 */
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {checkQuestion} from '../actions/actions'

class GamePanel extends Component {

	checkAnswer = (e) => {
		e.preventDefault();
		this.props.checkQuestion(e.target.getAttribute('data-key'));
	};

	render() {
		const {activeQuestion, defeat} = this.props.userBoard;
		console.log(this.props.questions);
		return (
			<div className="game-panel">
				{defeat ? <h1>DEFEAT!</h1> :
					<div>
						{this.props.questions.map((item, i) =>
								<div key={"question_key_" + i} id="question_answer"
									 className={(activeQuestion === i) ? 'active-question' : null}>
									<div key="question" className="question">
										<p id="question">
											<label>{item.question}</label>
										</p>
									</div>
									<div key="ans" className="ans">
										<ul className="ans-list">
											{item.answers.map((item, counter) =>
													<li key={item.field} onClick={this.checkAnswer} className={"ans_" + counter}>
														<label htmlFor="">
															<a href="#" data-key={item.field} className="answer">{item.text}</a>
														</label>
													</li>)
											}
										</ul>
									</div>
								</div>
						)}
					</div>}
			</div>
		)
	}
}

export default connect(
	state => {
		return {
			questions: state.adminBoard.questions,
			userBoard: state.userBoard
		}
	},
	{checkQuestion}
)(GamePanel);