<template>
  <div id="app">
    <nav-component></nav-component>
    <router-view />
    <footer-component></footer-component>
  </div>
</template>

<script>
import NavComponent from "./components/main/NavComponent";
import FooterComponent from "./components/main/FooterComponent";
export default {
  name: "App",
  components: {
    NavComponent,
    FooterComponent
  }
};
</script>

<style lang="scss"></style>
