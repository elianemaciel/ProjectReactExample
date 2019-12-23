import React from 'react';
import { List, Avatar, Icon } from 'antd';
import { gql } from "apollo-boost";
import { Query } from "react-apollo";


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

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class ListFavorite extends React.Component {
    render() {
    return (
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
                  <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                  <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                  <IconText type="message" text="2" key="list-vertical-message" />,
                  ]}
                  extra={
                    <img src={item.image} alt={item.name} />
                  }
              >
              <List.Item.Meta
                avatar={<Avatar src={item.name} />}
                title={<a href={item.href}>{item.name}</a>}
                description={item.name}
              />
              {item.content}
            </List.Item>
            )}
        />
        )
      }}
    </Query>
    );
  }
}

export default ListFavorite;

