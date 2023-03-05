import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Row, Col, Switch, Input } from 'antd';
import { Link } from 'react-router-dom';
//import { billChanged, planSelected} from '../../actions';
import './profile-edit.css';

import vector from './images/Vector.svg';
import vector1 from './images/Vector-1.svg';
import photo from './images/image8.png';
import RegistrationForm from './registration-form';

class ProfileEdit extends Component {


	render() {
		const { name, email, currentPassword } = this.props;



		return (
			<div className="main">
				<div className="rectangle5">
					<div className="rectangle85">
						<div className="rectangle92_1">
							<div className="header" >
								<hr className="vector44" />
								<div className="title"> Your Profile </div>
							</div>

							<div className="exitbuttonwrapper">
								<Link to='/plansettingsupp'>
									<img src={vector} className="circlebtn" alt="" />
									<img src={vector1} className="cross" alt="" />
								</Link>

							</div>
						</div>

						<div className="circlephoto">
							<img src={photo} alt="" />
						</div>
						<div className="profiledata">
							<RegistrationForm />

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

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEdit);
// export default HomePage;
