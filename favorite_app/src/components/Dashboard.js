import React from 'react';
import { List, Layout, Button } from 'antd';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";
import { ApolloProvider } from 'react-apollo';
import ApolloClient from "apollo-boost";
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router-dom";
import { favoriteAction } from '../actions/favorite';
import { connect } from 'react-redux';


const { Content } = Layout;

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql/',
});


class DashBoard extends React.Component {
    render() {
      const { favoriteAction, favorite } = this.props;
      const handleFavorite = (e) => {
        e.preventDefault();
        favoriteAction(e.target.value);
    };
    return (
      <Content style={{ padding: '0 50px' }}>
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
                  extra={
                    <img src={item.image} alt={item.name} />
                  }
              >
                {item.name}
                { favorite.favorite.indexOf(item.name) > -1 ?
                <div></div>
                :
                <Button type="primary" size="small" icon="star" value={item.name} onClick={handleFavorite} />
                }
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
const mapStateToProps = ({ favorite }) => {
  return { favorite };
};

const mapDispatchToProps = dispatch => {
return bindActionCreators({
  favoriteAction, 
}, dispatch)
};

const wrappedDashBoard = DashBoard;

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(wrappedDashBoard));

