import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
function Main(){
    return (
        <Switch>
            <Route exact path="/">
          <Home/>
            </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/listData">
            <ListData />
        </Route>
      </Switch>
    )
    
    }
    
    export default Main;
    