import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import { Articles } from "./articles";
import { Users } from "./users";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

import { Welcome } from "./welcome";
import "./styles.css";
import "antd/dist/antd.css";
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">Home</Menu.Item>
            <Menu.Item key="2">Contact us</Menu.Item>
            <Menu.Item key="3">About us</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout>
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
                <Menu.Item key="1">
                  <Icon type="user" />
                  <span>nav 1</span>
                </Menu.Item>
                <Menu.Item key="2">
                  <Icon type="video-camera" />
                  <span>nav 2</span>
                </Menu.Item>
                <Menu.Item key="3">
                  <Icon type="upload" />
                  <span>nav 3</span>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header
                style={{
                  position: "fixed",
                  zIndex: 1,
                  width: "100%",
                  background: "#fff",
                  padding: 0,
                  display: "none"
                }}
              >
                <div className="logo" />
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                  onClick={this.toggle}
                />
              </Header>
              <Content>
                <Users />
                {/*<Articles />*/}
              </Content>
            </Layout>
          </Layout>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
