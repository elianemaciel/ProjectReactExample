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


const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
        species
        gender
      }
    }
  }
`;

class ListFavorite extends React.Component {
    render() {
    return (<Content style={{ padding: '0 50px' }}>
      <ApolloProvider client={client}>
        <Query query={GET_CHARACTERS}>
        {({ loading, error, data }) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          const items = data.characters.results;
          return (
            
            <List
              itemLayout="vertical"
              size="large"
              pagination={{
              onChange: page => {
                  console.log(page);
              },
              pageSize: 3,
              }}
              dataSource={items}
              renderItem={item => (
                <List.Item
                    key={item.name}
                    actions={[
                    // <IconText type="star-o" key="list-vertical-star-o" />,
                    ]}
                    extra={
                      <img src={item.image} alt={item.name} />
                    }
                >
                <List.Item.Meta
                  title={<a href={item.href}>{item.name}</a>}
                  description={item.species}
                />
              </List.Item>
              )}
          />
          )
        }}
    </Query>
    </ApolloProvider>
    </Content>

    );
  }
}

export default ListFavorite;

