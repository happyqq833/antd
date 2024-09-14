
import "./LayoutDefault.css"
import { Layout } from "antd";
import logo from "../../image/logo.png";
import logofold from "../../image/logo-fold.png";
import { SearchOutlined, MenuUnfoldOutlined} from "@ant-design/icons";
import { useState } from "react";
import Notify from "../../Notify";
import MenuSider from "../../MenuSider";
import { Outlet } from "react-router-dom";
import LearnGrid from "../../learnGrid";
const { Header, Footer, Sider, Content} = Layout;

function LayoutDefault () {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout className="layout-defalt">
        <header className="header">
          <div className={"header__logo " + (collapsed && "header__logo--collapsed")}>
              <img src={collapsed ? logofold : logo} ></img>
          </div>
          <div className="header__nav">
            <div className="header__nav--left">
              <div className="header__collapse" onClick = {() => setCollapsed(!collapsed)}>
                <MenuUnfoldOutlined/>
              </div>
              <div className="header__search">
                <SearchOutlined/>
              </div>
            </div>
            <div className="header__nav--right">
              <Notify/>
            </div>
          </div>
        </header>
    
        <Layout>
          <Sider className="sider" collapsed={collapsed} theme="light">
              <MenuSider/>
          </Sider>

          <Content className="content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  )
}
export default LayoutDefault;