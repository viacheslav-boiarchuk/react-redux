import React, { Component } from 'react';
import {connect} from 'react-redux';

class AsideStepPanel extends Component {
	render() {
		let counter = 0;
		return (
			<div className="step-panel">
				<div className="question_list">
					<ul>
						<li key={counter++} className="fire"><span key="num" className="num">15</span><span key="money" className="money"><b>1 000 000</b></span></li>
						<li key={counter++}><span key="num" className="num">14</span><span key="money" className="money"><b>500 000</b></span></li>
						<li key={counter++}><span key="num" className="num">13</span><span key="money" className="money"><b>250 000</b></span></li>
						<li key={counter++}><span key="num" className="num">12</span><span key="money" className="money"><b>125 000</b></span></li>
						<li key={counter++}><span key="num" className="num">11</span><span key="money" className="money"><b>64 000</b></span></li>
						<li key={counter++} className="fire"><span key="num" className="num">10</span><span key="money" className="money"><b>32 000</b></span></li>
						<li key={counter++}><span key="num" className="num">9</span><span key="money" className="money"><b>16 000</b></span></li>
						<li key={counter++}><span key="num" className="num">8</span><span key="money" className="money"><b>8 000</b></span></li>
						<li key={counter++}><span key="num" className="num">7</span><span key="money" className="money"><b>4 000</b></span></li>
						<li key={counter++}><span key="num" className="num">6</span><span key="money" className="money"><b>2 000</b></span></li>
						<li key={counter++} className="fire"><span key="num" className="num">5</span><span key="money" className="money"><b>1 000</b></span></li>
						<li key={counter++}><span key="num" className="num">4</span><span key="money" className="money"><b>500</b></span></li>
						<li key={counter++}><span key="num" className="num">3</span><span key="money" className="money"><b>300</b></span></li>
						<li key={counter++}><span key="num" className="num">2</span><span key="money" className="money"><b>200</b></span></li>
						<li key={counter++} className="org_bg"><span key="num" className="num">1</span><span key="money" className="money"><b>100</b></span></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default connect(
	state => {
		return {
			adminPanel: state.adminBoard.adminPanel
		}
	},
	{}
)(AsideStepPanel);