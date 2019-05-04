import {USER_LOGIN, USER_LOGOUT} from '@app/store/constants'
import {UserCredentials} from '@app/types/userStore'
import {Dispatch} from 'redux'

const loginUser = (payload: UserCredentials) => ({
  type: USER_LOGIN,
  payload,
})

const logoutUser = () => ({
  type: USER_LOGOUT,
  payload: {},
})

const loginRequest = (payload: UserCredentials, dispatch: Dispatch) => {
  dispatch(loginUser(payload))
}

export default {loginUser, loginRequest, logoutUser}
