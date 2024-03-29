import React from 'react';
import { List, Layout } from 'antd';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";


const { Content } = Layout;

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});

const GET_EPISODE = gql`
    query {
        episodes
        {
            info {
                count
            }
            results {
                name,
                air_date,
                episode
            }	
        }
    }
`;

class Episode extends React.Component {

    render() {

    return (
        <Content style={{ padding: '0 50px' }}>

        <ApolloProvider client={client}>
            <Query query={GET_EPISODE} >
            {({ loading, error, data }) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                console.log(data);
                const items = data.episodes.results;
                return(
                    
                    <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 10,
                    }}
                    dataSource={items}
                    renderItem={item => (
                    <List.Item
                        key={item.name}
                    >
                    <ul>
                        <li>Name: {item.name}</li>
                        <li>Episode: {item.episode}</li>
                        <li>Date: {item.air_date}</li>
                    </ul>
                    </List.Item>
                    )}
                />
                )
            }
        }
        </Query>
        </ApolloProvider>
        </Content>
    );
  }
}

export default Episode;

