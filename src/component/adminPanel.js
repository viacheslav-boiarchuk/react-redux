/**
 * Created by user on 10.12.2016.
 */
import React, { Component } from 'react';
import {addQuestion, closeAdminPanel} from '../actions/actions';
import {connect} from 'react-redux';

class AdminPanel extends Component {

	saveQuestion = (e) => {
		e.preventDefault();
		let answerObject = {
			question: this.refs.question.value,
			answers: [
				{
					text: this.refs.AnswerOne.value,
					correct: true
				},
				{
					text: this.refs.AnswerTwo.value,
					correct: false
				},
				{
					text: this.refs.AnswerThree.value,
					correct: false
				},
				{
					text: this.refs.AnswerFour.value,
					correct: false
				}
			],
			correctAnswer: this.refs.correct_answer.value
		};
		this.props.addQuestion(answerObject);
		e.target.reset();
	};

	closePanel = (e) => {
		e.preventDefault();
		this.props.closeAdminPanel();
	};

	render() {
		return (
			<div className="admin-panel">
				<h1>Please add answer and questions for him</h1>
				<form action="" onSubmit={this.saveQuestion}>
					<div id="question_answer">
						<div className="question">
							<p id="question">
								<label className="question-block" htmlFor="question">
									<input type="text" ref="question" id="question"/>
								</label>
							</p>
						</div>
						<div className="top_ans">
							<div className="ans_1">
								<label htmlFor="AnswerOne">
									<span> A: </span>
									<input type="text" ref="AnswerOne" id="AnswerOne"/>
								</label>
							</div>
							<div className="ans_2">
								<label htmlFor="AnswerTwo">
									<span> B: </span>
									<input type="text" ref="AnswerTwo" id="AnswerTwo"/>
								</label>
							</div>
						</div>
						<div className="bot_ans">
							<div className="ans_1">
								<label htmlFor="AnswerThree">
									<span> C: </span>
									<input type="text" ref="AnswerThree" id="AnswerThree"/>
								</label>
							</div>
							<div className="ans_2">
								<label htmlFor="AnswerFour">
									<span> D: </span>
									<input type="text" ref="AnswerFour" id="AnswerFour"/>
								</label>
							</div>
						</div>
					</div>
					
					<div className="correct-answer-container"><label htmlFor="">Choose Correct Answer <br/>
						<select name="correct_answer" ref="correct_answer" id="correct_answer">
							<option value="A">A</option>
							<option value="B">B</option>
							<option value="C">C</option>
							<option value="D">D</option>
						</select></label></div>
					<input className="submit-btn" type="submit" value="Add"/>
					<input className="close-admin-btn" type="submit" value="Close Admin Panel"
						   onClick={this.closePanel}/>
				</form>
			</div>
		);
	}
}

export default connect(
	state => ({}),
	{addQuestion, closeAdminPanel}
)(AdminPanel);