import React from 'react';
import Login from '../components/Login';
import { Layout, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import {
    Link
  } from "react-router-dom";

const { Header } = Layout;

class BaseLayout extends React.Component {

    render() {
        const { login } = this.props;
        return (
            <Layout className="layout">
                <Header>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                    className="menu-top-bar"
                >
                    <Menu.Item key="1">
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/character">Character</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/episode">Episode</Link>
                    </Menu.Item>
                    <Menu.Item className="login" key="4">
                    { login.loggedIn ?
                        <div>
                        <Icon type="user" />
                        <span>{login.name}</span>
                        </div>
                    :
                    <Login />
                    }
                    </Menu.Item>
                </Menu>
                </Header>
        </Layout>
        )
    }
}

const mapStateToProps = ({ login }) => {
    return { login };
};
  
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
};

const wrappedBaseLayout = BaseLayout;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(wrappedBaseLayout));
