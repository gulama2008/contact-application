import ContactDetails from "./components/ContactDetails";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import React, { useEffect, useState } from "react";
import "./styles/App.css";
const { Header, Content, Footer, Sider } = Layout;
const items1 = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "2",
    label: "Contacts",
  },
];

const App = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [contact, setContact] = useState(1);
  const [contactList, setContactList] = useState([]);
  const [contactNameList, setContactNameList] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setContactList(data);
        const nameList = data.map((item) => {
            return {
                label: item.name,
                key: item.id
            };
        })
        console.log(nameList);
        setContactNameList(nameList);
        console.log(contactNameList);
        console.log(contactList);
      })
      .catch((err) => console.log("Request Failed", err));
  }, []);
    
    const nameOnClick = (item) => { 
        console.log(item);
        setContact(Number.parseInt(item.key));
    }
  
  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
      <Content
        style={{
          padding: "0 50px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Contacts</Breadcrumb.Item>
        </Breadcrumb>
        <Layout
          style={{
            padding: "24px 0",
            background: colorBgContainer,
          }}
        >
          <Sider
            style={{
              background: colorBgContainer,
            }}
            width={200}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={nameOnClick}
              style={{
                height: "100%",
              }}
              items={contactNameList}
            />
          </Sider>
          <Content
            style={{
              padding: "0 24px",
              minHeight: 280,
            }}
          >
            <ContactDetails contact={contact} contactList={contactList} />
          </Content>
        </Layout>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Content>
    </Layout>
  );
};
export default App;
