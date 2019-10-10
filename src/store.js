import Vuex from 'vuex'
import SystemUserService from './services/systemUserService'

const GET_USERS_START = 'GET_USERS_START'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'GET_USERS_ERROR'
const GET_USER_START = 'GET_USER_START'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_ERROR = 'GET_USER_ERROR'
const CREATE_USER_START = 'CREATE_USER_START'
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const CREATE_USER_ERROR = 'CREATE_USER_ERROR'

export function createStore() {
  return new Vuex.Store({
    state: {
      users: [{id: 1, name: 'Foo'}],
      user: {},
      usersLoading: false,
      usersError: false,
      userLoading: false,
      userError: false,
      createUserLoading: false,
      createUserError: false,
    },
    getters: {
      getUserById: (state) => (id) => state.user[id]
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
        state.users = [...users]
      },
      [GET_USER_START] (state) {
        state.userLoading = true
      },
      [GET_USER_SUCCESS] (state, { user }) {
        state.userLoading = false
        // Store the user on an index to help prevent errors around stale data and race conditions
        state.user = {
          ...state.user,
          [user.id]: { ...user }
        }
      },
      [GET_USER_ERROR] (state, { users }) {
        state.usersLoading = false
        state.usersError = true
        state.users = [...users]
      },
      [CREATE_USER_START] (state) {
        state.createUserLoading = true
      },
      [CREATE_USER_SUCCESS] (state) {
        state.createUserLoading = false
      },
      [CREATE_USER_ERROR] (state) {
        state.createUserLoading = false
        state.createUserError = true
      }
    },
    actions: {
      getUsers ({ commit }) {
        commit(GET_USERS_START)
        SystemUserService.getUsers()
          .then( users => commit(GET_USERS_SUCCESS, { users }))
          .catch( () => commit(GET_USERS_ERROR))
      },
      getUser ({ commit }, { id } ) {
        commit(GET_USERS_START)
        SystemUserService.getUser(id)
          .then( (user) => commit(GET_USER_SUCCESS, { user }))
          .catch()
      },
      createUser ({ commit }, { user }) {
        commit(CREATE_USER_START)
        SystemUserService.createUser(user)
          .then( () => commit(CREATE_USER_SUCCESS) )
          .catch( () => commit(CREATE_USER_ERROR))
      }
    },
  })
}