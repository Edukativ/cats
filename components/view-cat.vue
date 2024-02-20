<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="center col-md-6">
        <h2>Знакомьтесь, это {{ cat.name }} 🐈</h2>
        <p class="favorite" v-if="cat.favorite === true">Это ваш любимый кот!</p>
        <p class="favorite" v-else>Это не самый ваш любимый кот.</p>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h3>Котику {{ cat.age }} {{ declination(cat.age) }}.</h3>
          </div>
          <div class="col-md-8">
            <h3>Сейчас он занимает {{ cat.rate }} место на выставке.</h3>
          </div>
          <div class="col-md-8">
            <h3>Вот как его описывают хозяева:</h3>
            <p>"{{ cat.description }}"</p>
          </div>
          <div class="row justify-content-center" style="gap: 30px;">
            <button class="cat-button" type="button" name="button" @click="$emit('editCat', cat)">Изменить котика</button>
            <button class="cat-button" type="button" name="button" @click="$emit('deleteCat', cat)">Удалить котика</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cat'],
  name: 'ViewCatWindow',
  methods: {
    declination (number) {
      const cases = [2, 0, 1, 1, 1, 2]
      const titles = [' год', ' года', ' лет']
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
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
  opacity: .9;
  margin-bottom: 10px;
}

h3 {
  text-align: left;
  font-family: 'Montserrat';
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  opacity: .9;
}

p {
  font-family: 'Montserrat';
  font-size: 16px;
  font-weight: 600;
  opacity: .8;
  font-style: italic;
  margin-top: -10px;
}

p.favorite {
  text-align: center;
  font-style: normal;
  margin-bottom: 40px;
}

.cat-button {
  background-color: #D74C58;
  margin-top: 30px;
}

.cat-button:hover {
  background-color: #EE636F;
}
</style>
