import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UploadPictures from './UploadPictures';
import ViewItems from './ViewItems';
import Login from './Login';
import ContactUs from './ContactUs';
import CreateAccount from './CreateAcount';

const Main = () => (
    <main>
    <Switch>
        <Route exact path="/UploadPictures" component={UploadPictures} />
        <Route exact path="/Items" component={ViewItems} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/contact" component={ContactUs} />
        <Route exact path="/newAccount" component={CreateAccount} />
    </Switch>
    </main>   
)
export default Main;