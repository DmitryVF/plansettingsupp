
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,

} from 'antd';

import './profile-edit.css';
import { Link } from 'react-router-dom';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

class RegistrationForm extends React.Component {

  

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  };

  render() {
    const {name, email, currentPassword} = this.props;
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (

     <Form {...formItemLayout} onSubmit={this.handleSubmit}>
      <div >

        <div className="nameheading">
                First Last Name
        </div>
        <div className="formheading">
        <Form.Item>
          {getFieldDecorator('nickname', {
            initialValue: name,
            rules: [{ required: true, message: 'Please input your nickname!', whitespace: true }],
          })(<Input placeholder={name} />)}
        </Form.Item>
        </div>

        <div className="nameheading">
                Email
        </div>
        <div className="formheading">
        <Form.Item>
          {getFieldDecorator('email', {
            initialValue: email,
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        </div>

        <div className="nameheading">
                Current Password
        </div>
        <div className="formheading">
            <Input disabled defaultValue={currentPassword} />
        </div>

        <div className="nameheading">
                New Password
        </div>
        <div className="formheading">
        <Form.Item hasFeedback>
          {getFieldDecorator('password', {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: this.validateToNextPassword,
              },
            ],
          })(<Input.Password />)}
        </Form.Item>
        </div>

        <div className="nameheading">
              Confirm New Password
        </div>
        <div className="formheading">
        <Form.Item hasFeedback>
          {getFieldDecorator('confirm', {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: this.compareToFirstPassword,
              },
            ],
          })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
       </div>
       <div className="buttonrow">
         <div>
          <Link to='/profile'>
            <Button type="active" >
              Cancel
            </Button>
          </Link>  
         </div>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
       </div>
      </div>
    </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);


                     // (         state           )
const mapStateToProps = ({profile:{ name, email, currentPassword, newPassword,confirmPassword }}) => {
  return {
    name, email, currentPassword, newPassword, confirmPassword
  }
};

const mapDispatchToProps = {
      // onDelete:   bookDeletedInCard
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedRegistrationForm);

// export default WrappedRegistrationForm;