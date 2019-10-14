import Vue from 'vue'
import Vuex from 'vuex'
import SystemUserService from './services/systemUserService'

Vue.use(Vuex)

const GET_USERS_START = 'GET_USERS_START'
const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
const GET_USERS_ERROR = 'GET_USERS_ERROR'
const GET_USER_START = 'GET_USER_START'
const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
const GET_USER_ERROR = 'GET_USER_ERROR'
const CREATE_USER_START = 'CREATE_USER_START'
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS'
const CREATE_USER_ERROR = 'CREATE_USER_ERROR'
const UPDATE_USER_START = 'UPDATE_USER_START'
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
const UPDATE_USER_ERROR = 'UPDATE_USER_ERROR'
const DELETE_USER_START = 'DELETE_USER_START'
const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
const DELETE_USER_ERROR = 'DELETE_USER_ERROR'

export default new Vuex.Store({
  state: {
    users: [{id: 1, name: 'Foo'}],
    user: {},
    usersLoading: false,
    usersError: false,
    userLoading: false,
    userError: false,
    createUserLoading: false,
    createUserError: false,
    updateUserLoading: false,
    updateUserError: false,
    deleteUserLoading: false,
    deleteUserError: false,
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
        [user.id]: { ...user },
      }
    },
    [GET_USER_ERROR] (state) {
      state.userLoading = false
      state.userError = true
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
    },
    [UPDATE_USER_START] (state) {
      state.updateUserLoading = true
      state.updateUserError = false
    },
    [UPDATE_USER_SUCCESS] (state) {
      state.updateUserLoading = false
      state.updateUserError = false
    },
    [UPDATE_USER_ERROR] (state) {
      state.updateUserLoading = false
      state.updateUserError = true
    },
    [DELETE_USER_START] (state) {
      state.deleteUserLoading = true
      state.deleteUserError = false
    },
    [DELETE_USER_SUCCESS] (state) {
      state.deleteUserLoading = false
      state.deleteUserError = false
    },
    [DELETE_USER_ERROR] (state) {
      state.deleteUserLoading = false
      state.deleteUserError = true
    },
  },
  actions: {
    getUsers ({ commit }) {
      commit(GET_USERS_START)
      return SystemUserService.getUsers()
        .then( users => commit(GET_USERS_SUCCESS, { users }))
        .catch( () => commit(GET_USERS_ERROR))
    },
    getUser ({ commit }, { id } ) {
      commit(GET_USERS_START)
      return SystemUserService.getUser(id)
        .then( (user) => commit(GET_USER_SUCCESS, { user }))
        .catch( () => commit(GET_USER_ERROR))
    },
    createUser ({ commit }, { user }) {
      commit(CREATE_USER_START)
      return SystemUserService.createUser(user)
        .then( () => commit(CREATE_USER_SUCCESS) )
        .catch( () => commit(CREATE_USER_ERROR))
    },
    updateUser ({ commit }, { user }) {
      commit(UPDATE_USER_START)
      return SystemUserService.updateUser(user)
        .then( () => commit(UPDATE_USER_SUCCESS) )
        .catch( () => commit(UPDATE_USER_ERROR))
    },
    deleteUser ({ commit }, { id }) {
      commit(DELETE_USER_START)
      return SystemUserService.deleteUser(id)
        .then( () => commit(DELETE_USER_SUCCESS) )
        .catch( () => commit(DELETE_USER_ERROR))
    },
  },
})
