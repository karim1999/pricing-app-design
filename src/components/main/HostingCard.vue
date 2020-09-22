<template>
  <div class="hosting-card">
    <div class="card">
      <img :src="getImgUrl(hosting.img)" alt="" />
      <h1 class="title">{{ hosting.title }}</h1>
      <h2 v-if="hosting.description" class="description">
        {{ hosting.description }}
      </h2>
      <ul>
        <li v-for="feature in hosting.features" :key="feature">
          <img src="../../assets/feature-icon.png" alt="" />
          {{ feature }}
        </li>
      </ul>
    </div>
    <div
      :class="{
        'btn-container': true,
        center: hosting.type === 'center',
        left: hosting.type === 'left',
        right: hosting.type === 'right'
      }"
    >
      <button>Host On Cloud</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HostingCard",
  props: ["hosting"],
  methods: {
    getImgUrl(img) {
      return require("@/assets/" + img);
    }
  }
};
</script>

<style scoped lang="scss">
.hosting-card {
  flex: 1;
  border-radius: 10px;
  border: rgba(112, 112, 112, 0.33) solid thin;
  .card {
    @include display-flex(column, center, center, nowrap);
    padding: 40px 50px;
    flex: 1;
    img {
      width: 150px;
    }
    h1 {
      font-family: $font1;
      font-weight: $semibold_weight;
      font-size: 26px;
      margin-bottom: 30px;
    }
    h2 {
      font-family: $font2;
      font-weight: $medium_weight;
      font-size: 17px;
      margin-bottom: 30px;
    }
    ul {
      padding-left: 0;
      img {
        width: 20px;
      }
      li {
        list-style-type: none;
        font-family: $font1;
        font-weight: $regular_weight;
        font-size: 18px;
        margin-bottom: 14px;
      }
    }
  }
  .btn-container {
    align-self: stretch;
    justify-content: center;
    display: flex;
    button {
      @include main-button(
        $secondary2_color,
        10px,
        $font2,
        $semibold_weight,
        20px
      );
      border-radius: 10px 10px 0 0;
    }
    &.left {
      justify-content: flex-start;
      button {
        border-radius: 0 10px 0 0;
        background-color: $secondary3_color;
      }
    }
    &.right {
      justify-content: flex-end;
      button {
        border-radius: 10px 0 0 0;
        background-color: $secondary3_color;
      }
    }
  }
}
</style>
