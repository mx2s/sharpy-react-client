import React from "react";
import { Layout, Menu } from 'antd';
const { Header } = Layout;

class BaseHeader extends React.Component {
    render() {
        return <Layout>
            <Header className="header">
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['3']}
                    style={{lineHeight: '48px'}}
                >
                    <Menu.Item className="logo">Sharpy</Menu.Item>
                    <Menu.Item key="1">Tab 1</Menu.Item>
                    <Menu.Item key="2">Tab 2</Menu.Item>
                    <Menu.Item key="3">Tab 3</Menu.Item>
                </Menu>
            </Header>
        </Layout>;
    }
}
export default BaseHeader;