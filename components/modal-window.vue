<template>
  <div>
    <div class="modal-container" :class="[modal.active ? 'visible' : '']">
      <div class="close-button" @click="$emit('closeModal')">
        <i class="fas fa-times"></i>
      </div>
      <div class="modal-content">
        <div v-if="modal.edit === true">
          <edit-cat :cat="modal.cat" v-on:editCat="editCat" />
        </div>
        <div v-else-if="!modal.cat">
          <create-cat v-on:createCat="createCat" />
        </div>
        <div v-else>
          <view-cat :cat="modal.cat" v-on:editCat="startEditCat" v-on:deleteCat="deleteCat" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['modal'],
  name: 'ModalWindow',
  methods: {
    async createCat (args) {
      const ids = await this.$axios.$get('ids')
      const cat =
      {
        id: ids[ids.length - 1] + 1,
        name: args[0],
        image: args[1],
        age: args[2],
        rate: args[3],
        favorite: args[4],
        description: args[5]
      }
      await this.$axios.$post('add', cat)
      setTimeout(() => { this.$nuxt.refresh() }, 500)
      this.$emit('closeModal')
    },
    async deleteCat (args) {
      await this.$axios.$delete('delete/' + args.id)
      setTimeout(() => { this.$nuxt.refresh() }, 500)
      this.$emit('closeModal')
    },
    async editCat (args) {
      const cat =
      {
        id: args[0],
        name: args[1],
        image: args[2],
        age: args[3],
        rate: args[4],
        favorite: args[5],
        description: args[6]
      }
      this.$emit('editCat', [cat])
      await this.$axios.$put('update/' + args[0], cat)
      setTimeout(() => {
        this.$emit('stopEdit')
      }, 500)
    },
    startEditCat () {
      this.$emit('startEdit')
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: fixed;
  z-index: 999;
  left: 0;
  top: -100%;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow: 0 -32px 78px 26px rgba(49,52,87,.2);
  transition: 1s ease-in-out;
}

.modal-content {
  background-color: #fff;
  margin-top: 5vh;
  border: none;
}

.visible {
  top: 0;
}

.close-button {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  color: #fff;
  background: #e07a5f;
  border-radius: .375rem;
  padding: .75rem;
  top: 16px;
  left: 16px;
  text-align: center;
}

.close-button i {
  width: 17px;
}
</style>
