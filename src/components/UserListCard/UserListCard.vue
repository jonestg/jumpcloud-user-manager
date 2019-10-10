<template>
<v-card>
  <v-card-title>
    System Users
    <div class="flex-grow-1"></div>
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
    @edit="openEditUserDialog"
    @delete="handleDelete"
  />
  <AddEditUserDialog
    :key="selectedUserId"
    :userId="selectedUserId"
    :open="editDialogOpen"
    @close="handleEditDialogClose"
    @save="handleEditDialogSave"
  />
  <DeleteUserDialog
    :userId="selectedUserId"
    :open="deleteDialogOpen"
    @close="handleDeleteDialogClose"
    @delete="handleDeleteDialogConfirm"
  />
</v-card>
</template>

<script>
import { mapActions } from 'vuex'
import UserList from './UserList' 
import AddEditUserDialog from './AddEditUserDialog'
import DeleteUserDialog from './DeleteUserDialog'

export default {
  name: 'UserListCard',
  data: () => ({
    selectedUserId: null,
    editDialogOpen: false,
    deleteDialogOpen: false,
    userListKey: 0
  }),
  methods: {
    refreshUserList () {
      this.userListKey += 1
    },
    openCreateUserDialog () {
      this.selectedUserId = null
      this.editDialogOpen = true
    },
    openEditUserDialog (userId) {
      this.selectedUserId = userId
      this.editDialogOpen = true
    },
    handleDelete (userId) {
      this.selectedUserId = userId
      this.deleteDialogOpen = true
    },
    handleEditDialogClose () {
      this.editDialogOpen = false
    },
    handleEditDialogSave () {
      // Trigger re-render of the User List
      this.refreshUserList()
      this.editDialogOpen = false
    },
    handleDeleteDialogClose () {
      this.deleteDialogOpen = false
    },
    handleDeleteDialogConfirm () {
      // Trigger re-render of the User List
      this.refreshUserList()
      this.deleteDialogOpen = false
    },
    ...mapActions(['getUsers'])
  },
  components: {
    UserList,
    AddEditUserDialog,
    DeleteUserDialog
  }
}
</script>

<style scoped>

</style>