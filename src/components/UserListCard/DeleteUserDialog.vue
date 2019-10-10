<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Delete User {{userId}}?</v-card-title>
        <v-card-text>Are you sure you want to delete this user?</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="grey darken-1" text @click="handleCancel">Cancel</v-btn>
          <v-btn color="red darken-1" text :disabled="disabled" @click="handleDelete">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'DeleteUserDialog',
  data: () => ({disabled: false}),
  props: {
    open: Boolean,
    userId: Number
  },
  methods: {
    async handleDelete () {
      this.disabled = true
      await this.deleteUser({id: this.userId})
      this.$emit('delete')
      this.disabled = false
    },
    handleCancel () {
      this.$emit('close')
    },
    ...mapActions(['deleteUser'])
  }
}
</script>

<style scoped>

</style>