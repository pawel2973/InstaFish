import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import Profile from "./Containers/Profile/Profile";
import Wall from "./Containers/Wall/Wall";
import CreatePost from "./Containers/CreatePost/CreatePost"
import GoFishing from "./Containers/GoFishing/GoFishing";
import FindPeople from "./Containers/FindPeople/FindPeople";
import Settings from "./Containers/Settings/Settings";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route path="/" exact component={Profile}/>
                    <Route path="/wall" component={Wall}/>
                    <Route path="/create-post" component={CreatePost}/>
                    <Route path="/go-fishing" component={GoFishing}/>
                    <Route path="/find-people" component={FindPeople}/>
                    <Route path="/profile-settings" component={Settings}/>
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
