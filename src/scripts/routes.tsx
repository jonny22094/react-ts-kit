import * as React from 'react'
import {Switch, BrowserRouter} from 'react-router-dom'
import {AuthRoute, GuestRoute, PublicRoute} from '@app/middleware'
import loadable from '@loadable/component'

const Router = {
  Landing: loadable(() => import('@app/pages/Landing')),
  Dashboard: loadable(() => import('@app/pages/Dashboard')),
  Auth: {
    Login: loadable(() => import('@app/pages/Auth/Login')),
  },
  PageNotFound: loadable(() => import('@app/pages/PageNotFound')),
}

class Routes extends React.Component<{}> {
  render() {
    console.log(Router)
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <PublicRoute path="/" exact component={Router.Landing} />
            <AuthRoute path="/dashboard" exact component={Router.Dashboard} />
            <GuestRoute path="/login" component={Router.Auth.Login} />
            <GuestRoute path="/register" component={Router.Auth.Login} />
            <PublicRoute component={Router.PageNotFound} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    )
  }
}

export default Routes
