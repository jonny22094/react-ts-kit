import {USER_LOGIN, USER_LOGOUT} from '@app/store/constants'

export interface UserStore {
  username: string
  firstName: string
  lastName: string
  token: string
}

const initialState: UserStore = {
  username: '',
  firstName: '',
  lastName: '',
  token: localStorage.getItem('token') || '',
}

export const userReducer = (state: UserStore = initialState, action: any) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload,
      }
    case USER_LOGOUT:
      return {}
    default:
      return state
  }
}
