<template>
  <div class="container">
    <header-component
      :title="title"
      :description="description"
      :img="img"
    ></header-component>
    <div class="content">
      <h1 class="learn-more">Learn more about SwiftAssess</h1>
      <div class="hosting-plans">
        <hosting-card
          v-for="hosting in hostings"
          :key="hosting.type"
          :hosting="hosting"
        ></hosting-card>
      </div>
      <h1 class="why">Why use Microsoft Azure?</h1>
      <div class="">
        <div class="why-images">
          <img src="../assets/why1.png" alt="" />
          <img src="../assets/why2.png" alt="" />
        </div>
        <div class="why-images">
          <img src="../assets/why3.png" alt="" />
          <img src="../assets/why4.png" alt="" />
        </div>
      </div>
    </div>
    <header-component
      title="Interested in this Service?"
      description="You can request this service"
      img="header-img3.png"
    >
      <div class="header-btns">
        <button class="btn1">Tell us what you think</button>
        <button class="btn2">Get this service</button>
      </div>
    </header-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import HostingCard from "../components/main/HostingCard";
export default {
  name: "Home",
  components: {
    HeaderComponent,
    HostingCard
  },
  data() {
    return {
      title: "Hosting",
      description:
        "SwiftAssess offers multiple flavors of hosting depending on the requirements and policies, whether its Cloud, On-Premise, or Hybrid hosting.",
      img: "header-img2.png",
      hostings: [
        {
          title: "SwiftAssess On Cloud",
          description: "",
          img: "hosting-plan1.png",
          type: "left",
          features: [
            "Flexibility, Scalability",
            "Allowing your business to scale up and dow n to meet demand instantly",
            "Gives control over your security locally",
            "Requires more knowledge, resources, effort, and cost"
          ]
        },
        {
          title: "SwiftAssess On Cloud",
          description:
            "Cloud technologies have several advantages when compared to traditional dedicated server resources",
          img: "hosting-plan2.png",
          type: "center",
          features: [
            "Flexibility, Scalability",
            "Allowing your business to scale up and dow n to meet demand instantly",
            "Gives control over your security locally",
            "Requires more knowledge, resources, effort, and cost"
          ]
        },
        {
          title: "SwiftAssess On Cloud",
          description: "",
          img: "hosting-plan3.png",
          type: "right",
          features: [
            "Flexibility, Scalability",
            "Allowing your business to scale up and dow n to meet demand instantly",
            "Gives control over your security locally",
            "Requires more knowledge, resources, effort, and cost"
          ]
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.content {
  padding: 70px 223px;
  .learn-more {
    font-family: $font2;
    font-weight: $semibold_weight;
    font-size: 25px;
  }
  .hosting-plans {
    @include display-flex(row, center, center);
    margin-top: 50px;
  }
  .why {
    font-family: $font1;
    font-size: 40px;
    font-weight: $semibold_weight;
    text-align: center;
    margin-top: 90px;
  }
  .why-images {
    @include display-flex(row, center, center);
    img {
      width: 400px;
    }
  }
}
.header-btns {
  button {
    @include main-button($secondary3_color, 50px, $font1, $medium_weight, 20px);
    &.btn1 {
      margin-right: 20px;
    }
    &.btn2 {
      background-color: $primary_color;
      color: $secondary3_color;
    }
  }
}
</style>
