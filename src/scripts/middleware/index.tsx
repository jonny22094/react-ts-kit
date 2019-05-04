import * as React from 'react'
import {Route, Redirect, RouteProps} from 'react-router-dom'
import {UserStore} from '@app/store/reducers/userReducer'
import {connect} from 'react-redux'

interface Props extends RouteProps {
  userStore?: UserStore
}

const mapStateToProps = ({userStore}: {userStore: UserStore}) => ({
  userStore,
})

export const AuthRoute = connect(mapStateToProps)(({userStore, ...props}: Props) => {
  return userStore.token ? <Route {...props} /> : <Redirect to="/" />
})

export const GuestRoute = connect(mapStateToProps)(({userStore, ...props}: Props) => {
  return !userStore.token ? <Route {...props} /> : <Redirect to="/" />
})

export const PublicRoute = Route
