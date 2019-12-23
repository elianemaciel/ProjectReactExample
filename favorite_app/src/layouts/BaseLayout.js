import React from 'react';
import App from '../App';
import Login from '../components/Login';
import { Layout, Menu, Icon } from 'antd';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";


const { Header, Content, Footer } = Layout;
const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql/',
});


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
                    <Menu.Item key="1">Home</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
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
                <Content style={{ padding: '0 50px' }}>
                    <ApolloProvider client={client}>
                        <App />
                    </ApolloProvider>,
                </Content>
                <Footer style={{ textAlign: 'center' }}></Footer>
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
