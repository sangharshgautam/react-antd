import React, { Component } from "react";
import { Table, Tag, Divider } from "antd";

const columns = [
  {
    title: "Picture",
    dataIndex: "picture",
    key: "picture",
    render: picture => <img src={picture.medium} />
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: name => (
      <span>{name.title + " " + name.first + " " + name.last}</span>
    )
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    render: email => <h1>{email}</h1>
  }
];

export class Users extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }
  componentDidMount() {
    fetch("https://randomuser.me/api/?results=10")
      .then(results => {
        return results.json();
      })
      .then(json => {
        console.log(json.results);
        this.setState({ users: json.results });
      });
  }
  render() {
    return <Table dataSource={this.state.users} columns={columns} />;
  }
}
