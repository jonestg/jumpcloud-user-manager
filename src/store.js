import Vuex from 'vuex'
import SystemUserService from './services/systemUserService'

const GET_USERS_START = 'GET_USERS_START'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'GET_USERS_ERROR'

export function createStore() {
  return new Vuex.Store({
    state: {
      users: [{id: 1, name: 'Foo'}],
      usersLoading: false,
      usersError: false
    },
    mutations: {
      [GET_USERS_START] (state) {
        state.usersLoading = true
      },
      [GET_USERS_SUCCESS] (state, { users }) {
        state.usersLoading = false
        state.users = users
      },
      [GET_USERS_ERROR] (state, { users }) {
        state.usersLoading = false
        state.usersError = true
        state.users = users
      }
    },
    actions: {
      getUsers ({ commit }) {
        commit(GET_USERS_START)
        SystemUserService.getUsers()
          .then( users => commit(GET_USERS_SUCCESS, { users }))
          .catch( () => commit(GET_USERS_ERROR))
      }
    },
  })
}