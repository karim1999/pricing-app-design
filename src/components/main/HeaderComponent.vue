<template>
  <div class="header-container">
    <div class="text">
      <h1>{{ title }}</h1>
      <h2>{{ description }}</h2>
      <slot></slot>
    </div>
    <img v-if="img" :src="getImgUrl(img)" alt="" />
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ["title", "description", "img"],
  methods: {
    getImgUrl(img) {
      return require("@/assets/" + img);
    }
  }
};
</script>

<style scoped lang="scss">
.header-container {
  border-radius: 15px;
  margin: 0 23px;
  flex: 1;
  @include display-flex(row, space-between, center);
  background-image: url("../../assets/background.png");
  min-height: 500px;
  background-size: cover;
  .text {
    flex: 1;
    font-family: $font1;
    color: $primary_color;
    padding-left: 200px;
    h1 {
      font-size: 50px;
      font-weight: $semibold_weight;
    }
    h2 {
      font-size: 25px;
      font-weight: $medium_weight;
    }
  }
  img {
    flex: 1;
    margin-top: auto;
    max-width: 40%;
  }
}
</style>
