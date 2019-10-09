<template>
<v-card>
  <v-card-title>
    System Users
    <div class="flex-grow-1"></div>
    <AddUserDialog />
  </v-card-title>
  <UserList />
</v-card>
</template>

<script>
import UserList from './UserList' 
import AddUserDialog from './AddUserDialog'
export default {
  name: 'UserListCard',
  components: {
    UserList,
    AddUserDialog
  }
}
</script>

<style scoped>

</style>