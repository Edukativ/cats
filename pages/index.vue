<template>
  <div>
    <div id="cats" class="container">
      <h1>Выставка котиков 🐈</h1>
      <div class="flex row justify-content-center" style="gap: 30px 0;">
        <div class="col-md-4" v-for="cat in cats" :key="cat.id">
          <cat-card :cat="cat" v-on:openViewCatModal="openViewCatModal" />
        </div>
      </div>
      <div class="buttons">
        <button class="cat-button" type="button" name="button" @click="openModal">Создать котика</button>
      </div>
    </div>
    <modal-window v-on:closeModal="closeModal" v-on:startEdit="startEdit" v-on:stopEdit="stopEdit" v-on:editCat="editCat" :modal="modal" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      cats: [],
      modal: {
        active: false,
        create: false,
        edit: false,
        cat: null
      }
    }
  },
  async fetch () {
    const cats = []
    await this.$axios.$get('/show').then((request) => {
      for (const f in request) {
        const cat = request[f]
        cats.push(cat)
      }
      this.cats = cats
    })
	},
	fetchOnServer: false,
  methods: {
    openViewCatModal (cat) {
      this.modal.active = true
      this.modal.create = false
      this.modal.edit = false
      this.modal.cat = cat
    },
    openModal () {
      this.modal.active = true
      this.modal.create = true
      this.modal.edit = false
    },
    closeModal () {
      this.modal.active = false
      setTimeout(() => {
        if (this.modal.active === false) {
          this.modal.create = false
          this.modal.edit = false
          this.modal.cat = null
        }
      }, 1000)
    },
    startEdit () {
      this.modal.edit = true
    },
    stopEdit () {
      this.modal.edit = false
    },
    editCat (args) {
      const newCat = args[0]
      const cat = this.cats.find(c => c.id === newCat.id)
      cat.name = newCat.name
      cat.age = newCat.age
      cat.rate = newCat.rate
      cat.favorite = newCat.favorite
      cat.description = newCat.description
    }
  }
}
</script>

<style scoped>
#cats {
  margin-top: 14vh;
  margin-bottom: 14vh;
}

h1 {
  text-align: center;
  font-family: 'Montserrat';
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
  opacity: .9;
}

.buttons {
  display: flex;
  justify-content: center;
  padding: 16px 0;
}

.cat-button {
  background-color: #84a98c;
}

.cat-button:hover {
  background-color: #98BA9F;
}
</style>
