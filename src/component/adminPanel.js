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
			]
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
				<form action="" onSubmit={this.saveQuestion}>
					<label className="question-block" htmlFor="question"> Question
						<input type="text" ref="question" id="question"/>
					</label><br/>
					<label htmlFor="AnswerOne"> AnswerOne
						<input type="text" ref="AnswerOne" id="AnswerOne"/>
					</label><br/>
					<label htmlFor="AnswerTwo"> AnswerTwo
						<input type="text" ref="AnswerTwo" id="AnswerTwo"/>
					</label><br/>
					<label htmlFor="AnswerThree"> AnswerThree
						<input type="text" ref="AnswerThree" id="AnswerThree"/>
					</label><br/>
					<label htmlFor="AnswerFour"> AnswerFour
						<input type="text" ref="AnswerFour" id="AnswerFour"/>
					</label><br/>
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