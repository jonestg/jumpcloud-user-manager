import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import UserList from '../UserList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

const getUsersMock = jest.fn().mockResolvedValue()

describe('UserList Component', () => {
  let actions
  let store
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })
  beforeEach(() => {
    actions = {
      getUsers: getUsersMock,
    }
    store = new Vuex.Store({
      state: {},
      actions,
    })
  })

  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(UserList, {
      store,
      localVue,
      vuetify,
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('requests users on mount', () => {
    expect(getUsersMock).toHaveBeenCalled()
  })
})
