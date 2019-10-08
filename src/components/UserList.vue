<template>
  <div class="user-list">
    <div>Users-</div>
    <div v-for="user in users" :key="user.id">
      {{user.name}}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserList',
  computed: mapState(['users']),
  methods: mapActions(['getUsers']),
  mounted: function () { this.getUsers() }
}
</script>

<style scoped>
</style>