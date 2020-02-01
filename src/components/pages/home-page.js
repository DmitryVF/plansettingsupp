import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PlanSettings from '../plan-settings';
import { Button } from 'antd';
import { Row, Col, Switch, Tooltip } from 'antd';

import { billChanged, planSelected} from '../../actions';

// import r11 from './images/Rectangle11.png';
// import r12 from './images/Rectangle12.png';

// must be moved to store
let billMonthly;
let billAnnually;

// const rac11style = {
// 		background-image: url(./images/Rectangle11.png)
// 	};
// const rac12style = {
// 		background-image: url(./images/Rectangle12.png)
// 	};


const Card = ({planName, price, featured, selected})=>{

	let classNames, classNames1;
	if(featured == "true"){
		classNames = "rectangle10";
		classNames1 = "";
	}else{
		classNames = "";
		classNames1 = "rectangle11";
	}

	return (

		      		  	<div className = "rectangle4_1">
	      		  			<div className="wrapper1"> 
		      		  			<div className="rectangle12" /> 
		      		  			<div className={classNames1} /> 
		      		  			<div className={classNames} />
	      		  			</div>
	      		  			<div className= "circleopa"/>
	      		  			<div className= "circle">
	      		  			<div className="crown"/>
	      		  			</div>
	      		  			<div className="wrapper1">
	      		  				<div className="planname">
		      		  				{planName}
		      		  				
		      		  			</div>
		      		  			<div className='planprice'>
		      		  				{price}
		      		  			</div>
		      		  			<div className='permonth'>
		      		  			per month
		      		  			</div>
		      		  			<div className='plandescription'>
		      		  			Plan description
		      		  			</div>
		      		  			<div className='descriptiontext'>
		      		  			Lorem ipsum dolor sit amet, eiusmo dconsectetur adipiscing elit, sed do eiusmod tempor incididunt
		      		  			</div>
		      		  			<div className='buttonwrapper'>
		      		  				<Button className="buttonselected" type="primary" >
		      		  					Selected
		      		  				</Button>
		      		  					<div className='buttontextbox'>	
		      		  					 
		      		  					<span className='confirm'/>
		      		  					<span className='confirm1'/>
		      		  					</div>
		      		  			</div>

	      		  			</div>
		      		  	</div>
	);	      		  	
}


class HomePage extends Component {


render (){
	const {billType, planType} = this.props;

	
	if(billType=='monthly'){
	  billMonthly = 'bill bold';
	  billAnnually = 'bill normal';	
	}else{
	  billMonthly = 'bill normal';
	  billAnnually = 'bill bold';	
	}	


	function onChange(checked) {
  console.log(`switch to ${checked}`);
	billChanged(checked);

	console.log(billMonthly);
	}



	return (
		<div className="main">
		
		
		
      		<div className = "rectangle5">
      			<div className = "titlewrapper">
		      		 <div className = "planSettings">
		      		 	<span>PLAN</span> SETTINGS
		      		 </div>
		      		  <hr className = "vector65" /> 
	      		 </div>
	      		  <div className = "rectangle4">
	      		  	<div className="switchwrapper">
	      		  	<div className={billMonthly}>
	      		  		Bill monthly 
	      		  	</div>
	      		  	<div className="switch">
	      		  		<Switch onChange={onChange} />
	      		  	</div>
	      		  	<Tooltip placement="bottom" title="Save 8%">
	      		  	<div className={billAnnually}>
	      		  		Bill annually 
	      		  	</div>
	      		  	</Tooltip>
	      		  	</div>
			<div className="cardsumwrapper">	      		  	
      		<Card planName = "13 DAYS TRIALS PLAN" price = "$ 0" featured ="false" selected ="true"/>
      		<Card planName = "PLAN NAME 2" price = "$ 100" featured ="false" selected ="true"/>
      		<Card planName = "UNLIMITED PACAGES" price = "$ 300" featured ="true" selected ="true"/>
      		</div>

      		 	  </div>
	      	</div>
	      		  
     		 
		</div>
	);
};
};


                     // (         state           )
const mapStateToProps = ({planSettings:{ billType, planType }}) => {
	console.log('billType');
  return {
    billType,
    planType
    //total:orderTotal
  }
};

const mapDispatchToProps = {
      billChanged
      // onDelete:   bookDeletedInCard
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
// export default HomePage;
