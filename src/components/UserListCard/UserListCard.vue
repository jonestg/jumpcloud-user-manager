<template>
<v-card>
  <v-card-title>
    System Users
    <div class="flex-grow-1"></div>
    <AddUserDialog
      :key="selectedUserId"
      :userId="selectedUserId"
      :open="dialogOpen"
      @close="handleDialogClose"
      @save="handleDialogSave"
    />
  </v-card-title>
  <v-btn
    color="blue darken-1"
    text
    @click.stop="openCreateUserDialog"
  >
    Create User
  </v-btn>
  <UserList
    :key="userListKey"
  />
</v-card>
</template>

<script>
import { mapActions } from 'vuex'
import UserList from './UserList' 
import AddUserDialog from './AddUserDialog'
export default {
  name: 'UserListCard',
  data: () => ({
    selectedUserId: null,
    dialogOpen: false,
    userListKey: 0
  }),
  methods: {
    refreshUserList () {
      this.userListKey += 1
    },
    openCreateUserDialog () {
      this.selectedUserId = null
      this.dialogOpen = true
    },
    openEditUserDialog (userId) {
      this.selectedUserId = userId
      this.dialogOpen = true
    },
    handleEdit () {
    },
    handleDialogClose () {
      this.dialogOpen = false
    },
    handleDialogSave () {
      // Trigger re-render of the User List
      this.refreshUserList()
      this.dialogOpen = false
    },
    ...mapActions(['getUsers'])
  },
  components: {
    UserList,
    AddUserDialog
  }
}
</script>

<style scoped>

</style>