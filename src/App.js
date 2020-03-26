import React from 'react';
import Header1 from './Pages/Header/Header1';
import {Layout} from 'antd'
import './App.css';
import Changeappointment from '../src/Changeappointment';
import Sideheader from './Pages/Sideheader/Sideheader';
const {Header,Sider,Content} = Layout;

function App() {
  return (
    <div className="App"> 
    <Layout>
      <Header>
       <Header1/> 
     </Header>
      <Layout>
       <Sider>
       <Sideheader/>
       </Sider>
        <Content>
        <div className="dashboard">
          <ul>
            Warehouse <li>Appointments</li><li>Edit</li>
          </ul>
        </div>
       <div className="edit"><h1>Edit Appointment</h1></div>
       <Changeappointment/>
        </Content>
      </Layout>
    </Layout>
  </div>
  );
}
export default App;

