import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Avatar from './Avatar'
import Home from './Home'
import Personajes from './Personajes'



// import randomapi from './components/randomapi'

import View from '../layout/View'

const RouterApp = () => {
    return (
        <BrowserRouter>          
            <View>
              <Switch>
                <Route path='/personajes'>
                  <Personajes />
                </Route>
                <Route path='/avatar'>
                  <Avatar />
                </Route>
                <Route path='/'>
                  <Home />
                </Route>
              </Switch>
            </View>
        </BrowserRouter>
    )
}

export default RouterApp
