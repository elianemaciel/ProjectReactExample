import { Modal, Button } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import React from 'react';
import { Icon } from 'antd';
import { loginAction } from '../actions/login';
import { Col, Input, Row, Form, Alert } from 'antd';


const FormItem = Form.Item;


class Login extends React.Component {
    state = {
        username: '',
        password: '',
        statusInterval: null
    };

    onChangeLogin = (e) => {
        this.setState({
            username: e.target.value,
        })
    };

    onChangePassword = (e) => {
        this.setState({
            password: e.target.value,
        })
    };

    showModal = () => {
        this.setState({
        visible: true,
        });
    };

    handleOk = () => {
        this.setState({ loading: true });
        setTimeout(() => {
        this.setState({ loading: false, visible: false });
        }, 3000);
    };

    handleCancel = () => {
        this.setState({ visible: false });
    };

    render() {
        const { visible, loading } = this.state;
        const { loginAction, login } = this.props;
        const { getFieldDecorator } = this.props.form;
        const handleSubmit = (e) => {
            e.preventDefault();
            this.props.form.validateFields((err, values) => {
                if (!err) {
                    console.log('Received values of form: ', values);
                    this.setState({ loading: true });
                    this.setState({ loading: false, visible: false });
                    loginAction(values);
                    
                }
            });
        };
        return (
        <div>
            <Button type="primary" onClick={this.showModal}>
                <Icon type="login" />
                Login
            </Button>
            <Modal
                visible={visible}
                title="Login"
                onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={[
                    <Button key="back" onClick={this.handleCancel}>
                    Return
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleSubmit}>
                    Login
                    </Button>,
                ]}
            >
            <Form onSubmit={handleSubmit}>

                <div className={'login-error-message'}>
                {
                    login.message ?

                    <Alert
                        description={login.message}
                        type="error"
                        closable
                        showIcon
                    />
                    :
                    <div></div>
                }

                </div>

                <Row type="flex" justify="center" style={{marginBottom: '3px'}}>

                <Col span={12}>

                    <FormItem>

                    {getFieldDecorator('username', {
                        initialValue: '',
                        rules: [{ required: true, message: 'Please enter your username.' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            placeholder="Login"
                            onChange={this.onChangeLogin}
                        />
                    )}

                    </FormItem>

                </Col>

                </Row>

                <Row type="flex" justify="center">

                <Col span={12}>

                    <FormItem>

                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please enter your password.' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            size="large"
                            type="password"
                            placeholder="password"
                            onChange={this.onChangePassword}
                        />
                    )}
                    </FormItem>
                </Col>
                </Row>

            </Form>
            </Modal>
        </div>
        );
    }
}
const mapStateToProps = ({ login }) => {
    return { login };
};
  
const mapDispatchToProps = dispatch => {
return bindActionCreators({
    loginAction, 
}, dispatch)
};

const wrappedLogin = Form.create()(Login);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(wrappedLogin));