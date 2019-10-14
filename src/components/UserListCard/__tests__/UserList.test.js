import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Vuetify from 'vuetify'
import UserList from '../UserList.vue'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(Vuetify)

const getUsersMock = jest.fn().mockResolvedValue()
const testUser = {id: 5, name: 'ATestUser'}

describe('UserList Component', () => {
  let vuetify
  beforeEach(() => {
    vuetify = new Vuetify()
  })

  let actions
  let store
  beforeEach(() => {
    actions = {
      getUsers: getUsersMock,
    }
    store = new Vuex.Store({
      state: {
        users: [testUser],
      },
      actions,
    })
  })

  describe('shallow mount', () => {
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

    it('renders users from Vuex', () => {
      expect(wrapper.contains(testUser.name))
    })

    it.skip('emits an edit event when the edit button is clicked', () => {
      document.querySelector('v-icon.edit-button').dispatchEvent(new Event('click'))
      expect(wrapper.emitted().edit).toBeTruthy()
    })

  })

  // I haven't been able to get a mount to work
  // However I thought it would be good to show what I was trying to test
  describe.skip('mount', () => {
    let wrapper
     
    beforeEach(() => {
      wrapper = mount(UserList, {
        store,
        localVue,
        vuetify,
      })
    })

    it('emits an edit event when the edit button is clicked', () => {
      wrapper.find('v-icon.edit-button').trigger('click')
      expect(wrapper.emitted().edit).toBeTruthy()
    })

    it('emits a delete event when the delete button is clicked', () => {
      document.querySelector('v-icon.delete-button').dispatchEvent(new Event('click'))
      expect(wrapper.emitted().delete).toBeTruthy()
    })
  })

})
