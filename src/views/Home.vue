<template>
  <div class="container">
    <header-component
      :title="title"
      :description="description"
      :img="img"
    ></header-component>
    <table-component></table-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import TableComponent from "../components/main/TableComponent";
export default {
  name: "Home",
  components: {
    HeaderComponent,
    TableComponent
  },
  data() {
    return {
      title: "Main User License Plans",
      description:
        "Explore our user licenses plans for SwiftAssess, which includes a variety of features to help you achieve more",
      img: "header-img1.png"
    };
  }
};
</script>
<style lang="scss"></style>
