<template>
  <div class="container">
    <header-component
      :title="title"
      :description="description"
      :img="img"
    ></header-component>
    <div class="services-content">
      <div class="row">
        <h1>Professional Services</h1>
      </div>
      <div class="row services">
        <service-component
          v-for="(service, index) in services"
          :key="index"
          :index="index"
          :title="service.title"
          :description="service.description"
        ></service-component>
      </div>
      <div class="row btn-container">
        <button class="back-btn">Back</button>
        <button class="proceed-btn">Proceed</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import ServiceComponent from "../components/main/ServiceComponent";
export default {
  name: "Services",
  components: {
    HeaderComponent,
    ServiceComponent
  },
  data() {
    return {
      title: "Customize the plan exactly on your needs",
      description:
        "Please fill in the next fields to ensure you the best plan for you",
      img: "",
      services: [
        {
          title: "Lorem Ipsum is simply dummy text",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          title: "Lorem Ipsum is simply dummy text",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          title: "Lorem Ipsum is simply dummy text",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          title: "Lorem Ipsum is simply dummy text",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          title: "Lorem Ipsum is simply dummy text",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          title: "Lorem Ipsum is simply dummy text",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.services-content {
  background-color: $white;
  position: relative;
  top: -30px;
  padding: 60px 60px;
  border-radius: 10px;
  -webkit-box-shadow: 0 0 17px 4px rgba(112, 112, 112, 0.24);
  -moz-box-shadow: 0 0 17px 4px rgba(112, 112, 112, 0.24);
  box-shadow: 0 0 17px 4px rgba(112, 112, 112, 0.24);
  margin: 0 223px;
  font-family: $font2;
  align-items: center;
  .row {
    justify-content: flex-start;
    margin-top: 20px;
  }
  h1 {
    font-size: 25px;
    font-weight: $semibold_weight;
  }
  label {
    font-size: 20px;
    font-weight: $medium_weight;
    margin-top: 30px;
    margin-right: 40px;
  }
  .note {
    font-family: $font1;
    font-size: 14px;
    font-weight: $medium_weight;
    color: $secondary2_color;
  }
  .btn-container {
    justify-content: space-between;
    button {
      @include main-button(
        $secondary3_color,
        64px,
        $font2,
        $semibold_weight,
        15px
      );
      &.back-btn {
        background-color: $secondary2_color;
        border-radius: 65px 0 65px 65px;
        margin-right: 20px;
      }
      &.proceed-btn {
      }
    }
  }
  .services {
    @include display-flex(row, space-around, flex-start, wrap);
  }
}
</style>
