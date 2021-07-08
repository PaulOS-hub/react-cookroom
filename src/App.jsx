import React from 'react'
import Home from '@/views/Home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import List from '@/page/list'
import Learning from '@/views/hooksLearning'
import Studying from '@/views/hooksLearning/Wrapper'
export default function App() {
    return (
        <div style={{ height: '100%' }}>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/learning" component={Studying}></Route>
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    )
}