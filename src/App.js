import React from 'react'; 
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'; 

import Socials from './components/UI/SocialBar/Socials';
import Layout from '../src/hoc/Layout'; 
import Home from '../src/components/Pages/Home/Home'; 
import Projects from '../src/components/Pages/Projects/Projects'; 
import classes from './App.module.css'; 

const App = () => {
  let routes = (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/home" exact component={Home} />
      <Redirect to="/home" />
    </Switch>
  ); 

  return (
    <div className={classes.App}>
      <Layout>
          <Socials></Socials>
          {routes}
      </Layout>
    </div>
  );
}

export default withRouter(App);
