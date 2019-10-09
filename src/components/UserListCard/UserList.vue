<template>
  <div class="user-list">
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="50"
    ></v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SystemUser from '../../models/SystemUser'


export default {
  name: 'UserList',
  computed: mapState(['users']),
  methods: mapActions(['getUsers']),
  mounted () { this.getUsers() },
  data() {
    const headers = Object.keys(SystemUser)
      .map(key => ({
        text: SystemUser[key].name,
        value: key
      }))
    return { headers }
  }
}
</script>

<style scoped>
</style>