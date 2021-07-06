import React from 'react'
import Home from '@/views/Home/Home'
import { Switch, Route, Redirect } from 'react-router-dom'
import List from '@/page/list'
import Learning from '@/views/hooksLearning'
export default function App() {
    return (

        <div style={{ height: '100%' }}>
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/list" component={List}></Route>
                <Route path="/learning" component={Learning}></Route>
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    )
}