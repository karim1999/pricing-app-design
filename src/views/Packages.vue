<template>
  <div class="container">
    <header-component
      :title="title"
      :description="description"
      :img="img"
    ></header-component>
    <table-component
      title="Support Packages"
      :enable-parent="false"
    ></table-component>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderComponent from "../components/main/HeaderComponent";
import TableComponent from "../components/main/TableComponent";
export default {
  name: "Packages",
  components: {
    HeaderComponent,
    TableComponent
  },
  data() {
    return {
      title: "Customize the plan exactly on your needs",
      description:
        "Please fill in the next fields to ensure you the best plan for you",
      img: ""
    };
  }
};
</script>
<style lang="scss"></style>
