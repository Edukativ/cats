<template>
  <div class="cat-box" @click="$emit('openViewCatModal', cat)">
    <div class="image">
      <nuxt-img
        format="webp"
        :src="'/' + getCatPic()"
        quality="100"
        width="1024"
        height="1024"
        preload
      />
    </div>
    <div class="description">
      <h2>{{ cat.name }}, {{ cat.age }} {{ declination(cat.age) }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cat'],
  name: 'CatCard',
  methods: {
    declination (number) {
      const cases = [2, 0, 1, 1, 1, 2]
      const titles = [' год', ' года', ' лет']
      return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
    },
    getCatPic () {
      return (this.cat.id % 3) + '.png'
    }
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
  font-family: 'Montserrat';
  font-size: 17px;
  font-weight: 600;
  padding: 12px 18px;
}

.image {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90%;
  background-color: #70798c;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

img {
  display: flex;
  width: 80%;
  height: 100%;
}

.description {
  position: relative;
  color: #eee;
  background-color: #111;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.cat-box {
  cursor: pointer;
  transition: .3s ease-in-out;
  border-radius: 20px;
  box-shadow: 0 -32px 78px 26px rgba(49,52,87,.15);
}

.cat-box:hover {
  transform: scale(1.06);
}
</style>
