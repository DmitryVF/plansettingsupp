import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { Row, Col, Switch, Tooltip } from 'antd';

import { billChanged, planSelected} from '../../actions';
import './profile.css';

// must be moved to store
let billMonthly;
let billAnnually;




class Profile extends Component {


render (){
	// const {billType, planType} = this.props;

	
	
	return (
		<div className="main">
			<div className = "rectangle5">
      		<div className = "rectangle92">
      			dddd
	      	</div>
	      	</div>
	      		  
     		 
		</div>
	);
};
};


                     // (         state           )
const mapStateToProps = ({profile:{ name, email, currentPassword, newPassword,confirmPassword }}) => {
  return {
    name, email, currentPassword, newPassword,confirmPassword
  }
};

const mapDispatchToProps = {
      // onDelete:   bookDeletedInCard
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default HomePage;
