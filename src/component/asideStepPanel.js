import React, { Component } from 'react';
import {connect} from 'react-redux';

class AsideStepPanel extends Component {
	render() {
		return (
			<div className="step-panel">
				<div className="question_list">
					<ul>
						<li className="fire"><span className="num">15</span><span className="money"><b>1 000 000</b></span></li>
						<li><span className="num">14</span><span className="money"><b>500 000</b></span></li>
						<li><span className="num">13</span><span className="money"><b>250 000</b></span></li>
						<li><span className="num">12</span><span className="money"><b>125 000</b></span></li>
						<li><span className="num">11</span><span className="money"><b>64 000</b></span></li>
						<li className="fire"><span className="num">10</span><span className="money"><b>32 000</b></span></li>
						<li><span className="num">9</span><span className="money"><b>16 000</b></span></li>
						<li><span className="num">8</span><span className="money"><b>8 000</b></span></li>
						<li><span className="num">7</span><span className="money"><b>4 000</b></span></li>
						<li><span className="num">6</span><span className="money"><b>2 000</b></span></li>
						<li className="fire"><span className="num">5</span><span className="money"><b>1 000</b></span></li>
						<li><span className="num">4</span><span className="money"><b>500</b></span></li>
						<li><span className="num">3</span><span className="money"><b>300</b></span></li>
						<li><span className="num">2</span><span className="money"><b>200</b></span></li>
						<li className="org_bg"><span className="num">1</span><span className="money"><b>100</b></span></li>
					</ul>
				</div>
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
)(AsideStepPanel);