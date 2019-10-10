<template>
  <div class="user-list">
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="50"
    >
      <template v-slot:item.action="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="handleEdit(item)"
        >
          edit
        </v-icon>
        <v-icon
          small
          @click="handleDelete(item)"
        >
          delete
        </v-icon>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import SystemUser from '../../models/SystemUser'

export default {
  name: 'UserList',
  computed: mapState(['users']),
  methods: {
    handleEdit (user) {
      this.$emit('edit', user.id)
    },
    handleDelete (user) {
      this.$emit('delete', user.id)
    },
    ...mapActions(['getUsers'])
  },
  mounted () { this.getUsers() },
  data() {
    const valueHeaders = Object.keys(SystemUser)
      .map(key => ({
        text: SystemUser[key].name,
        value: key
      }))
    const headers = [
      ...valueHeaders,
      { text: 'Actions', value: 'action', sortable: false }
    ]
    return {
      headers
    }
  }
}
</script>

<style scoped>
</style>