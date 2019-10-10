<template>
  <v-container class="content d-flex flex-column">
    <UserListCard />
  </v-container>
</template>

<script>
import UserListCard from '../components/UserListCard'

export default {
  name: 'UserManagementPage',
  props: {
    header: String
  },
  components: {
    UserListCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
  margin: 20px;
  height: 100%;
  width: 100%;
}
</style>
