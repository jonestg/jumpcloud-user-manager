<template>
  <div class="hello">
    <h1>Home Page</h1>
    <div>
      <h3>Users</h3>
      <UserList />
    </div>
  </div>
</template>

<script>
import UserList from './UserList.vue'

export default {
  name: 'HomePage',
  props: {
    header: String
  },
  components: {
    UserList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
