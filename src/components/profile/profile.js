import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Row, Col, Switch, Input } from 'antd';
import { Link } from 'react-router-dom';
import { billChanged, planSelected } from '../../actions';
import './profile.css';

import vector from './images/Vector.svg';
import vector1 from './images/Vector-1.svg';
import photo from './images/image8.png';
// must be moved to store
let billMonthly;
let billAnnually;




class Profile extends Component {


	render() {
		const { name, email, currentPassword } = this.props;



		return (
			<div className="main">
				<div className="rectangle5">
					<div className="rectangle92">
						<div className="rectangle92_1">
							<div className="header" >
								<hr className="vector44" />
								<div className="title"> Your Profile </div>
							</div>
							<div className="editbuttonwrapper">
								<Link to='/plansettingsupp/Profile-edit'>
									<Button type="link" className="edit">Edit</Button>
								</Link>
							</div>
							<div className="editbuttonwrapper">
								<Link to='/plansettingsupp/Profile-edit'>
									<div className="ellipse49" />
									<img src={vector} className="square" alt="" />
									<img src={vector1} className="pen" alt="" />
								</Link>

							</div>
						</div>

						<div class="circlephoto">
							<img src={photo} alt="" />
						</div>
						<div className="profiledata">
							<div className="nameheading">
								First Last Name
							</div>
							<div className="formheading">
								<Input disabled defaultValue={name} />
							</div>
							<div className="nameheading">
								Email
							</div>
							<div className="formheading">
								<Input disabled defaultValue={email} />
							</div>
							<div className="nameheading">
								Password
							</div>
							<div className="formheading">
								<Input disabled defaultValue={currentPassword} />
							</div>

						</div>
					</div>
				</div>


			</div>
		);
	};
};


// (         state           )
const mapStateToProps = ({ profile: { name, email, currentPassword, newPassword, confirmPassword } }) => {
	return {
		name, email, currentPassword, newPassword, confirmPassword
	}
};

const mapDispatchToProps = {
	// onDelete:   bookDeletedInCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default HomePage;
