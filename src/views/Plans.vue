<template>
  <div class="container plans">
    <header-component :title="title" :description="description" :img="img">
      <div class="row">
        <div class="row">
          <img src="../assets/feature-icon.png" alt="" />
          <h3>Flexible free trial</h3>
        </div>
        <div class="row">
          <img src="../assets/feature-icon.png" alt="" />
          <h3>Cancel or switch plans anytime</h3>
        </div>
      </div>
    </header-component>
    <div class="content">
      <loading
        :active.sync="isLoading"
        :can-cancel="false"
        :is-full-page="true"
      ></loading>
      <ul class="top-nav">
        <li
          v-for="productType in productTypes"
          :key="productType.ID"
          :class="{ active: currentType === productType.ID }"
          @click="changeType(productType.ID)"
        >
          {{ productType.Product_Type }}
        </li>
      </ul>
      <!--      <div class="switches">-->
      <!--        <div class="switch-container">-->
      <!--          <switch-component-->
      <!--            :options="[-->
      <!--              { label: 'EGP', value: 'E£' },-->
      <!--              { label: 'USD', value: '$' }-->
      <!--            ]"-->
      <!--          ></switch-component>-->
      <!--        </div>-->
      <!--        <div class="switch-container">-->
      <!--          <switch-component-->
      <!--            :options="[-->
      <!--              { label: 'Monthly', value: 'm' },-->
      <!--              { label: 'Yearly', value: 'y' }-->
      <!--            ]"-->
      <!--          ></switch-component>-->
      <!--        </div>-->
      <!--      </div>-->
      <div class="hosting-plans">
        <pricing-card
          v-for="currentPlan in currentPlans"
          :key="currentPlan.ID"
          :plan="currentPlan"
        ></pricing-card>
      </div>
      <div>
        <router-link :to="{ name: 'All', query: { type: currentType } }"
          ><h1 class="see-all">See Full Comparison</h1></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import PricingCard from "../components/main/PricingCard";
// import SwitchComponent from "../components/main/SwitchComponent";
import { productPlans, productTypes } from "../api/Product";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Plans",
  components: {
    HeaderComponent,
    PricingCard,
    // SwitchComponent,
    Loading
  },
  data() {
    return {
      isLoading: false,
      title: "Plans and Pricing",
      description: "Plans built for every organization and institution",
      img: "",
      productTypes: [],
      productPlans: [],
      hostings: [],
      currentType: "",
      currentPlans: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      this.productTypes = await productTypes.get();
      if (this.productTypes.length >= 1) {
        this.currentType = this.productTypes[0].ID;
        this.currentPlans = this.productPlans[this.productTypes[0].ID];
      }
      let plans = await productPlans.get();
      plans.forEach(plan => {
        if (!this.productPlans[plan.Product_Type.ID])
          this.productPlans[plan.Product_Type.ID] = [];
        this.productPlans[plan.Product_Type.ID].push(plan);
      });
      if (this.productTypes.length >= 1) {
        this.currentPlans = this.productPlans[this.productTypes[0].ID];
      }
      this.isLoading = false;
    },
    changeType(type) {
      this.currentType = type;
      this.currentPlans = this.productPlans[type];
    }
  }
};
</script>
<style lang="scss">
.plans {
  .header-container {
    text-align: center;
    .text {
      padding-left: 0 !important;
    }
  }
}
.row {
  @include display-flex(row, center, center);
  img {
    width: 25px;
    margin-top: 0 !important;
    margin-right: 10px;
  }
  h3 {
    font-family: $font2;
    font-weight: $regular_weight;
    font-size: 20px;
    margin-right: 20px;
  }
}
ul.top-nav {
  margin: 0 100px;
  @include display-flex(row, space-between, center);
  border: solid thin rgba(112, 112, 112, 0.24);
  border-radius: 0 0 30px 30px;
  li {
    list-style-type: none;
    font-family: $font1;
    font-weight: $semibold_weight;
    font-size: 20px;
    margin: 20px 30px;
    cursor: pointer;
    &:hover,
    &.active {
      color: $secondary2_color;
    }
  }
}
.content {
  padding: 0 223px;
  .hosting-plans {
    @include display-flex(row, center, center);
    margin-top: 50px;
  }
}
.switches {
  @include display-flex(row, space-evenly, center);
  margin-top: 40px;
  margin-bottom: 40px;
  .switch-container {
  }
}
.see-all {
  font-family: $font2;
  font-size: 25px;
  font-weight: $semibold_weight;
  color: $secondary3_color;
  margin-top: 50px;
}
</style>
