<template>
<v-dialog v-model="open" persistent max-width="500px">
  <v-card>
    <v-card-title>
      <span class="headline">{{ formTitle }}</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4" v-for="field in fields" :key="field.key">
            <v-text-field v-model="value[field.key]" :label="field.label"></v-text-field>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <v-card-actions>
      <div class="flex-grow-1"></div>
      <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="save">Save</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import SystemUser from '../../models/SystemUser'

export default {
  name: 'AddUserDialog',
  data: () => {
    const fields = Object.keys(SystemUser)
      .filter(key => !SystemUser[key].static)
      .map(key => ({
        key,
        label: SystemUser[key].name
      }))

    const defaultUser = {}
    Object.keys(SystemUser)
      .forEach(key => defaultUser[key] = SystemUser[key].default)

    return ({
      value: {
        ...defaultUser
      },
      fields
    })
  },
  computed: {
    formTitle () {
      return this.userId == null ? 'Create User' : 'Edit User'
    },
    currentUser: function () {
      if(this.userId != null) {
        return this.getUserById(this.userId)
      }
      return null
    },
    userLoaded: function () {
      return true
    }
  },
  props: {
    open: Boolean,
    userId: Number
  },
  watch: {
    currentUser: function (val, oldVal) {
      if(oldVal == undefined) {
        this.value = {...val}
      }
    }
  },
  mounted () { this.userId != null && this.getUser(this.userId) },
  methods: {
    close () {
      this.$emit('close')
    },
    async save () {
      //TODO disable save button
      // Using an await here is arguably not an ideal pattern (vs using the loading value in vuex)
      await this.createUser({user: {...this.value}})
      //TODO add error check (Alert and don't close)
      //TODO reenable save button
      this.$emit('save')
      return
    },
    ...mapActions(['createUser', 'getUser']),
    ...mapGetters(['getUserById'])
  }
}
</script>

<style scoped>
</style>