import React from 'react'; 
import { Route, withRouter, Switch } from 'react-router-dom'; 

import Socials from './components/UI/SocialBar/Socials';
import Layout from '../src/hoc/Layout'; 
import Home from '../src/components/Pages/Home/Home'; 
import Projects from '../src/components/Pages/Projects/Projects'; 
import classes from './App.module.css'; 

const App = () => {
  let routes = (
    <Switch>
      <Route path="/react-portfolio/projects" component={Projects} />
      <Route path="/react-portfolio" exact component={Home} />
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
