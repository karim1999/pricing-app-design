<template>
  <div class="container">
    <loading
      :active.sync="isLoading"
      :can-cancel="false"
      :is-full-page="true"
    ></loading>
    <header-component
      :title="title"
      :description="description"
      :img="img"
    ></header-component>
    <div class="table-container">
      <div class="row">
        <h1>Plans/ Features</h1>
        <div class="plans-container">
          <div class="plan" v-for="plan in plans" :key="plan.ID">
            <p class="title">{{ plan.Feature_Plan }}</p>
            <!--          <p class="price">-->
            <!--            <span class="price-num"><span class="currency">$</span> 256</span>-->
            <!--          </p>-->
            <!--          <p class="duration">Per Month</p>-->
            <button class="subscribe-btn">Select This Plan</button>
          </div>
        </div>
      </div>
      <div class="table">
        <!--        <div v-if="enableParent" class="parent-feature">-->
        <!--          <img src="../assets/group-icon.png" alt="" />-->
        <!--          <h1>Curriculum Management</h1>-->
        <!--        </div>-->
        <div
          class="row feature-container"
          v-for="feature in features"
          :key="feature.ID"
        >
          <div class="feature-name">
            <img src="../assets/feature-icon.png" alt="" />
            <h2>{{ feature.Product_Plan_Feature }}</h2>
          </div>
          <div class="plans-container">
            <div
              class="feature-plan-value"
              v-for="plan in plans"
              :key="plan.ID"
            >
              <img
                v-if="
                  plan.Plan_Features &&
                    plan.Plan_Features.filter(feat => feat.ID === feature.ID)
                      .length >= 1
                "
                class="check"
                src="../assets/check.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import { productFeatures, productPlans } from "../api/Product";
// Import component
import Loading from "vue-loading-overlay";
// Import stylesheet
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    Loading
  },
  data() {
    return {
      title: "Main User License Plans",
      description:
        "Explore our user licenses plans for SwiftAssess, which includes a variety of features to help you achieve more",
      img: "header-img1.png",
      typeId: "",
      isLoading: false,
      plans: [],
      features: []
    };
  },
  mounted() {
    let uri = window.location.search.substring(1);
    let params = new URLSearchParams(uri);
    this.typeId = params.get("type");
    console.log(this.typeId);
    this.getData();
  },
  methods: {
    async getData() {
      this.isLoading = true;
      let plans = await productPlans.get();
      this.features = await productFeatures.get(this.typeId);
      plans.forEach(plan => {
        if (plan.Product_Type.ID === this.typeId) {
          this.plans.push(plan);
        }
      });
      this.isLoading = false;
    }
  }
};
</script>
<style scoped lang="scss">
.row {
  @include display-flex(row, space-between, center, nowrap);
}
.table-container {
  background-color: $white;
  position: relative;
  top: -30px;
  padding: 0 20px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 17px 4px rgba(112, 112, 112, 0.24);
  -moz-box-shadow: 0 0 17px 4px rgba(112, 112, 112, 0.24);
  box-shadow: 0 0 17px 4px rgba(112, 112, 112, 0.24);
  margin: 0 223px;
  h1 {
    font-family: $font2;
    font-size: 25px;
    font-weight: $semibold_weight;
  }
  .plans-container {
    @include display-flex(row, space-evenly, flex-start, wrap);
    .plan {
      padding: 20px 0;
      width: 240px;
      text-align: center;
      line-height: 30px;
      font-family: $font2;
      .title {
        font-size: 20px;
        font-weight: $semibold_weight;
      }
      .price {
        font-size: 55px;
        font-weight: $medium_weight;
        position: relative;
        .price-num {
          position: relative;
        }
        .currency {
          font-family: $font2;
          font-size: 25px;
          position: absolute;
          left: -20px;
          top: 0;
        }
      }
      .duration {
        font-weight: $medium_weight;
        font-size: 17px;
        color: rgba(0, 0, 0, 0.25);
      }
      .subscribe-btn {
        @include main-button(
          $secondary2_color,
          55px,
          $font2,
          $medium_weight,
          17px
        );
        padding: 16px 28px;
      }
      &:hover {
        background-color: $secondary3_color;
        border-radius: 0 0 10px 10px;
        .duration,
        .title,
        .price,
        .currency {
          color: $white !important;
        }
        .subscribe-btn {
          @include main-button(
            $white,
            55px,
            $font2,
            $medium_weight,
            17px,
            $black
          );
          padding: 16px 28px;
        }
      }
    }
  }
}
.table {
  .parent-feature {
    flex: 1;
    padding: 17px;
    background-color: #f9f7ff;
    border-radius: 10px;
    font-family: $font1;
    font-weight: $semibold_weight;
    font-size: 20px;
    @include display-flex(row, flex-start, center);
    img {
      width: 35px;
      margin-right: 10px;
    }
  }
  .feature-container {
    padding-left: 17px;
    .feature-name {
      @include display-flex(row, flex-start, center);
      h2 {
        font-family: $font1;
        font-size: 18px;
        font-weight: $regular_weight;
      }
      img {
        width: 25px;
        margin-right: 10px;
      }
    }
    .feature-plan-value {
      width: 240px;
      align-self: center;
      text-align: center;
      .value {
        font-family: $font2;
        font-size: 20px;
        font-weight: $semibold_weight;
        color: $secondary3_color;
      }
      .check {
        width: 40px;
      }
    }
  }
}
</style>
