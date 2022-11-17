import React from "react";
import "./App.scss";
import "antd/dist/antd.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ListView } from "./views/ListView/list";
import { Gridpage } from "./views/GridPage/gridpage";
import { AddOrganisationComponent } from "./views/AddEditForm/addForm2";
// import {FormComponent} from './views/AddForm/addForm';
// import { EditForm } from "./views/EditForm/editforms";
import { Layout, Typography } from "antd";
import { EditOrganisationComponent } from "./views/AddEditForm/editForm2";
// import { EditOrganisationComponent } from "./views/AddEditForm/editForm2";

const { Text } = Typography;

const { Header, Content, Sider } = Layout;


function App() {
  // let {path}=useRouteMatch();
  let recievedCardData = localStorage.getItem("cardData");
  let parsedReceivedData = JSON.parse(recievedCardData);

  let myUrl = new URL("http://localhost:3000/edit/");
  myUrl.searchParams.append("id", parsedReceivedData.getIndex);
  console.log(myUrl);

  return (
    <>
      <div>
        <Layout>
          <Header className="header">
            <img src="" alt="" />
            Header
          </Header>
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Text>Sider</Text>
            </Sider>
            <Layout className="between-sider-and-content">
              <Content className="content-container">
                <Router>
                  {/* <Route exact path="/" component={ContentHeader2} /> */}
                  {/* <Route exact path="/list" component={ContentHeader1} /> */}
                  <Switch>
                    <Route
                      exact
                      path="/organisation"
                     
                    >
                      < Gridpage/>
                      

                    </Route>
                    <Route exact path="/organisation/list" component={ListView}></Route>

                    <Route
                      exact
                      path={'/organisation/add'}
                      component={AddOrganisationComponent}
                    ></Route>
                    <Route
                      exact
                      path={`${window.location.pathname}/edit`}
                      component={EditOrganisationComponent}
                    ></Route>
                  </Switch>
                </Router>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </div>
    </>
  );
}

export default App;
