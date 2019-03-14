import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import { Button, Divider, Tag, Spin, Alert, Switch } from "antd";
import { Table } from "antd";
import { Welcome } from "./welcome";
import "./styles.css";
import "antd/dist/antd.css";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="javascript:;">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="javascript:;">Invite {record.name}</a>
        <Divider type="vertical" />
        <a href="javascript:;">Delete</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"]
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"]
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"]
  }
];

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Welcome name="Sangharsh" />
      <h2>Start editing to see some magic happen!</h2>
      <DatePicker />
      <Button>Hello world!</Button>
      <Spin />
      <Alert
        message="Alert message title"
        description="Further details about the context of this alert."
        type="info"
      />
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
