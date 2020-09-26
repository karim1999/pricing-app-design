<template>
  <div class="service-card">
    <div class="row">
      <img
        class="status-icon"
        :src="getImgUrl('icon', (index % 3) + 1)"
        alt=""
      />
      <h1 class="title">{{ title }}</h1>
    </div>
    <div class="row">
      <img
        class="status-name"
        :src="getImgUrl('name', (index % 3) + 1)"
        alt=""
      />
    </div>
    <div class="row">
      <p class="description">{{ description }}</p>
    </div>
    <div class="row btn-container">
      <button>Get It Now</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "ServiceComponent",
  props: ["title", "description", "index"],
  methods: {
    getImgUrl(name, index) {
      return require("@/assets/status" + index + "-" + name + ".png");
    }
  }
};
</script>

<style scoped lang="scss">
.service-card {
  width: 380px;
  .row {
    flex-wrap: nowrap;
  }
  padding: 30px 20px;
  border-radius: 15px;
  margin-top: 20px;
  border: solid thin $grey;
  font-family: $font1;
  .title {
    font-size: 25px;
    font-weight: $semibold_weight;
  }
  .status-icon {
    width: 75px;
  }
  .status-name {
    height: 28px;
    width: auto;
  }
  .description {
    font-size: 18px;
    font-weight: $medium_weight;
    color: #676767;
  }
  .btn-container {
    justify-content: flex-end;
  }
  button {
    @include main-button(
      $secondary3_color,
      70px,
      $font2,
      $semibold_weight,
      15px
    );
  }
  &:hover {
    background-color: #4054b2;
    color: $white;
    .description {
      color: #f9f7ff;
    }
  }
}
</style>
