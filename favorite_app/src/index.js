import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './styles/index.less';
import { Layout, Menu, Breadcrumb } from 'antd';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";

const { Header, Content, Footer } = Layout;
const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});

ReactDOM.render(

    <Layout className="layout">
        <Header>
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
            className="menu-top-bar"
        >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <ApolloProvider client={client}>
                <App />
            </ApolloProvider>,
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
