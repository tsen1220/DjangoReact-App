import React from "react";

import { List, Avatar } from "antd";

const Articles = props => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          console.log(page);
        },
        pageSize: 5
      }}
      dataSource={props.data}
      footer={
        <div>
          <b>Share your interesting life experience!!</b>
        </div>
      }
      renderItem={item => (
        <List.Item key={item.title}>
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={`/articles/${item.id}`}>{item.title}</a>}
            description={item.description}
          />
          <div>{item.content}</div>
          <br />
          <div>
            <b>PostUser:</b>
            {item.user}
          </div>
          <br />
          <div>
            <b> Updated:</b> {item.updated}
          </div>
        </List.Item>
      )}
    />
  );
};

export default Articles;
