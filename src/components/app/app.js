import React from 'react';
import { HomePage, ProfilePage, ProfileEditPage } from '../pages';
import { Route, Switch } from 'react-router-dom';
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
            <Link to='/plansettingsupp'>
              <Button type="link">Plan settings</Button>
            </Link>
            <Link to='/plansettingsupp/profile'>
              <Button type="link">Profile</Button>
            </Link>

          </Header>
        </Layout>


        <Switch>
          <Route
            path='/plansettingsupp'
            component={HomePage}
            exact />

          <Route
            path='/plansettingsupp/profile'
            component={ProfilePage}
          />

          <Route
            path='/plansettingsupp/profile-edit'
            component={ProfileEditPage}
          />
        </Switch>







      </div>


    </main>
  );
};
export default App;
