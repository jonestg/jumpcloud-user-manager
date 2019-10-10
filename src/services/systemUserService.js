import axios from 'axios'

//TODO: This belongs in a config or constants file
const url = '//localhost:3000/systemusers'

export default {
  getUsers: async () => {
    const res = await axios.get(url)
    return res.data
  },
  getUser: async (userId) => {
    const res = await axios.get(`${url}/${userId}`)
    return res.data
  },
  createUser: async (user) => {
    await axios.post(url, user)
    return
  },
  updateUser: async (user) => {
    await axios.put(`${url}/${user.id}`, user)
    return
  },
  deleteUser: async (userId) => {
    await axios.delete(`${url}/${userId}`)
    return
  },
}