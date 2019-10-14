import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import UserList from '../UserList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Component', () => {
  let actions
  let store
  beforeEach(() => {
    actions = {
      getUsers: jest.fn(),
    }
    store = new Vuex.Store({
      actions,
    })
  })

  test('is a Vue instance', () => {
    const wrapper = shallowMount(UserList, store, localVue)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
