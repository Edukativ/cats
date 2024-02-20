<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="center col-md-6">
        <h2>{{ title }}</h2>
        <form class="row justify-content-center">
          <div class="col-md-8">
            <label for="name">Придумайте имя...</label>
            <input type="text" name="name" placeholder="Барсик" v-model="name">
          </div>
          <div class="col-md-8">
            <label for="age">Придумайте возраст...</label>
            <input type="text" name="age" placeholder="2" v-model="age">
          </div>
          <div class="col-md-8">
            <label for="rate">Какое место он занимает?</label>
            <input type="text" name="rate" placeholder="5" v-model="rate">
          </div>
          <div class="col-md-8">
            <label for="rate">Нравится ли вам этот кот?</label>
            <input type="checkbox" name="favorite" style="width: auto;" v-model="favorite">
          </div>
          <div class="col-md-8">
            <label for="rate">Опишите кота...</label>
            <textarea name="name" rows="8" v-model="description" placeholder="Внимательный, активный и ласковый. Любит играть, катать мяч, и мурчать на пледе рядом с людьми! Прилично воспитан, приучен к лотку. Вакцинирован, имеет ветеринарный паспорт."></textarea>
          </div>
          <button class="cat-button" type="button" name="button" @click="editCat">Изменить котика</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cat'],
  name: 'EditCatWindow',
  data () {
    return this.initialData()
  },
  methods: {
    initialData () {
      return {
        title: 'Знакомьтесь, это ' + this.cat.name + ' 🐈',
        name: this.cat.name,
        age: this.cat.age,
        rate: this.cat.rate,
        favorite: this.cat.favorite,
        description: this.cat.description
      }
    },
    editCat () {
      const cat = [this.cat.id, this.name, this.cat.image, +this.age, +this.rate, this.favorite, this.description]
      if (isNaN(parseFloat(this.age)) || isNaN(parseFloat(this.rate)) || typeof (this.favorite) !== 'boolean') {
        this.title = 'Заполните все поля правильно!'
        return
      }
      this.$emit('editCat', cat)
      // Object.assign(this.$data, this.initialData())
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: 'Montserrat';
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 40px;
  opacity: .9;
}

form label {
  width: 100%;
  color: #22223b;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  opacity: .8;
  margin-bottom: 2px;
}

form input, form textarea {
  width: 100%;
  outline: none;
  color: #92929e;
  border: 1px solid #888;
  padding: 6px 12px;
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  opacity: .9;
  margin-bottom: 24px;
}

.cat-button {
  background-color: #84a98c;
}

.cat-button:hover {
  background-color: #98BA9F;
}
</style>
