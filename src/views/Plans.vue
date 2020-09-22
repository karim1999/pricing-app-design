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
      <ul class="top-nav">
        <li class="active">User License</li>
        <li>Test Center</li>
        <li>Smart Paper</li>
        <li>Observer</li>
        <li>Teachers and Instructors</li>
      </ul>
      <div class="switches">
        <div class="switch-container">
          <switch-component
            :options="[
              { label: 'EGP', value: 'E£' },
              { label: 'USD', value: '$' }
            ]"
          ></switch-component>
        </div>
        <div class="switch-container">
          <switch-component
            :options="[
              { label: 'Monthly', value: 'm' },
              { label: 'Yearly', value: 'y' }
            ]"
          ></switch-component>
        </div>
      </div>
      <div class="hosting-plans">
        <pricing-card
          v-for="hosting in hostings"
          :key="hosting.type"
          :hosting="hosting"
        ></pricing-card>
      </div>
      <div>
        <a href=""><h1 class="see-all">See Full Comparison</h1></a>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import PricingCard from "../components/main/PricingCard";
import SwitchComponent from "../components/main/SwitchComponent";
export default {
  name: "Home",
  components: {
    HeaderComponent,
    PricingCard,
    SwitchComponent
  },
  data() {
    return {
      title: "Plans and Pricing",
      description: "Plans built for every organization and institution",
      img: "",
      hostings: [
        {
          title: "Professional",
          description: "Contrary to popular belief, Lorem",
          img: "plan1.png",
          default: false,
          features: [
            "Basic Curriculum Management",
            "Basic Questions Bank",
            "Test Authoring",
            "Test Delivery",
            "Assignments & Projects",
            "Basic Analytics"
          ]
        },
        {
          title: "Professional",
          description: "Contrary to popular belief, Lorem",
          img: "plan2.png",
          default: true,
          features: [
            "Basic Curriculum Management",
            "Basic Questions Bank",
            "Test Authoring",
            "Test Delivery",
            "Assignments & Projects",
            "Basic Analytics",
            "Accessibility",
            "Cloud Hosting Only"
          ]
        },
        {
          title: "Professional",
          description: "Contrary to popular belief, Lorem",
          img: "plan3.png",
          default: false,
          features: [
            "Basic Curriculum Management",
            "Basic Questions Bank",
            "Test Authoring",
            "Test Delivery",
            "Assignments & Projects",
            "Basic Analytics"
          ]
        }
      ]
    };
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
