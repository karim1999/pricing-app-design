<template>
  <div class="nav">
    <h1 class="logo">Logo</h1>
    <ul class="nav-list">
      <li><a href="">Sector</a></li>
      <li><a href="">Products</a></li>
      <li><a href="">Services</a></li>
      <li><a href="">Plans & Pricing</a></li>
      <li><a href="">About</a></li>
      <li>
        <button class="login-btn">Login</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavComponent"
};
</script>

<style scoped lang="scss">
.nav {
  @include display-flex(row, space-between, center);
  padding: 10px 211px;
  .logo {
    flex: 0;
    font-family: $font1;
    font-weight: $semibold_weight;
    font-size: 35px;
  }
  .nav-list {
    @include display-flex(row, center, center);
    li {
      font-family: $font1;
      font-size: 15px;
      font-weight: $medium_weight;
      list-style-type: none;
      margin-right: 70px;
    }
    .login-btn {
      @include main-button(
        $secondary3_color,
        70px,
        $font2,
        $semibold_weight,
        15px
      );
    }
  }
}
</style>
