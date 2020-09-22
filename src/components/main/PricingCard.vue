<template>
  <div class="pricing-card">
    <div class="card">
      <img
        v-if="hosting.default"
        class="default-img"
        src="../../assets/default.png"
        alt=""
      />
      <h1 class="title">{{ hosting.title }}</h1>
      <h2 v-if="hosting.description" class="description">
        {{ hosting.description }}
      </h2>
      <img :src="getImgUrl(hosting.img)" alt="" />
      <p class="price">
        <span class="price-num"
          ><span class="currency">$</span>256<span class="year">/yr</span></span
        >
      </p>
      <h2 class="description">
        Annual Plan Per Person
      </h2>
      <ul>
        <li v-for="feature in hosting.features" :key="feature">
          <img src="../../assets/feature-icon.png" alt="" />
          {{ feature }}
        </li>
      </ul>
    </div>
    <div :class="{ 'btn-container': true, default: hosting.default }">
      <button>Request a Quote</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PricingCard",
  props: ["hosting"],
  methods: {
    getImgUrl(img) {
      return require("@/assets/" + img);
    }
  }
};
</script>

<style scoped lang="scss">
.pricing-card {
  flex: 1;
  border-radius: 10px;
  border: rgba(112, 112, 112, 0.33) solid thin;
  .card {
    @include display-flex(column, center, center, nowrap);
    padding: 40px 50px;
    flex: 1;
    position: relative;
    .default-img {
      top: 0;
      right: 0;
      position: absolute;
    }
    img {
      width: 150px;
    }
    .price {
      font-size: 75px;
      font-family: $font1;
      font-weight: $semibold_weight;
      color: $secondary3_color;
      margin-top: 20px;
      margin-bottom: 0px;
      position: relative;
      .year {
        font-size: 32px;
      }
      .price-num {
        position: relative;
      }
      .currency {
        font-family: $font1;
        font-weight: $regular_weight;
        font-size: 35px;
        position: absolute;
        left: -20px;
        top: 0;
      }
    }
    h1 {
      font-family: $font1;
      font-weight: $semibold_weight;
      font-size: 26px;
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
        $secondary3_color,
        10px,
        $font2,
        $semibold_weight,
        20px
      );
      border-radius: 10px 10px 10px 10px;
      margin-bottom: 20px;
    }
    &.default button {
      background-color: $secondary2_color;
    }
  }
}
</style>
