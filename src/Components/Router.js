import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UploadPictures from './UploadPictures';
import ViewItems from './ViewItems';

const Main = () => (
    <main>
    <Switch>
        <Route exact path="/UploadPictures" component={UploadPictures} />
        <Route exact path="/Items" component={ViewItems} />
    </Switch>
    </main>   
)
export default Main;