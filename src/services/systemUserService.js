import axios from 'axios'

const url = '//localhost:3000/systemusers'

export default {
  getUsers: async () => {
    const res = await axios.get(url)
    return res.data
  },
  getUser: async (userId) => {
    const res = await axios.get(`url/${userId}`)
    return res.data
  },
  createUser: async (user) => user,
  updateUser: async (user) => user,
  deleteUser: async (userId) => userId,
}