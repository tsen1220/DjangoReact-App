import React from "react";

import { List, Avatar, Icon } from "antd";

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

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
        <List.Item
          key={item.title}
          actions={[
            <IconText type="message" text="2" key="list-vertical-message" />
          ]}
          extra={
            <img
              width={272}
              alt="logo"
              src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
            />
          }
        >
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
