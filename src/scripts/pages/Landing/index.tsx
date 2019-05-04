import * as React from 'react'
import {Redirect} from 'react-router-dom'
import {UserStore} from '@app/store/reducers/userReducer'
import {connect} from 'react-redux'

interface Props {
  userStore?: UserStore
}

const mapStateToProps = ({userStore}: {userStore: UserStore}) => ({
  userStore,
})

const Landing = ({userStore}: Props) => {
  return userStore.token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
}

export default connect(mapStateToProps)(Landing)
