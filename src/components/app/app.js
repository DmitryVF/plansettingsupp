import React from 'react';
import { HomePage, ProfilePage } from '../pages';
import  { Route, Switch } from 'react-router-dom';
//import { HomePage, CartPage } from '../pages';
import { Link } from 'react-router-dom';

 import { Button } from 'antd';
 import { Layout } from 'antd';
 
 import './app.css';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {	
  return (
    <main role='main' className='container'>
        <div className="App">
            

  <Layout>
    <Header>
        <Link to='/HomePage'>
                <Button type="primary">Plan settings</Button>
        </Link>
        <Link to='/profile'>
                <Button type="primary">Profile</Button>
        </Link>
    </Header>
      <Layout>
        <Content>
            <Switch>
                <Route 
                path='/'
                component={HomePage}
                exact />

                <Route 
                path='/profile'
                component={ProfilePage}
                />
            </Switch>
        </Content>
      </Layout>
    <Footer>
        
    </Footer>
  </Layout>



        </div>
        
        
    </main>
  );
};
export default App;
