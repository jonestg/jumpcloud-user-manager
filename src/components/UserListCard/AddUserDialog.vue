<template>
<v-dialog v-model="dialog" max-width="500px">
  <template v-slot:activator="{ on }">
    <v-btn color="primary" dark class="mb-2" v-on="on">Create User</v-btn>
  </template>
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
import { mapActions } from 'vuex'
import SystemUser from '../../models/SystemUser'

const fields = Object.keys(SystemUser)
  .filter(key => !SystemUser[key].static)
  .map(key => ({
    key,
    label: SystemUser[key].name
  }))

const defaultUser = {}
Object.keys(SystemUser)
  .forEach(key => defaultUser[key] = SystemUser[key].default)

export default {
  name: 'AddUserDialog',
  data: () => ({
    dialog: false,
    editedID: null,
    value: {
      ...defaultUser
    },
    defaultValue: {
      ...defaultUser
    },
    fields
  }),
  watch: {
    dialog (val) {
      val || this.close()
    },
  },
  computed: {
    formTitle () {
      return this.editedID == null ? 'Create User' : 'Edit User'
    },
  },
  methods: {
    close () {
      this.resetState()
      this.dialog = false
    },
    resetState () {
      this.value = Object.assign({}, this.defaultValue)
      this.editedID = null
    },
    async save () {
      //TODO disable save button
      await this.createUser({user: {...this.value}})
      //TODO add error check (Alert and don't close)
      //TODO reenable save button
      this.close()
      return
    },
    ...mapActions(['createUser'])
  }
}
</script>

<style scoped>
</style>