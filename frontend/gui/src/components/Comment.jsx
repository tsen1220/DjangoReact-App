import React from "react";

import { List, Avatar } from "antd";

const Comments = props => {
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
      renderItem={item => (
        <List.Item>
          <List.Item.Meta avatar={<Avatar src={item.avatar} />} />
          <div>
            <b>User:</b>
            {item.user}
          </div>
          <br />

          <div>
            <b>Reply</b>:{item.content}
          </div>
          <br />

          <br />
          <div>
            <b> Updated:</b> {item.updated}
          </div>
        </List.Item>
      )}
    />
  );
};

export default Comments;
