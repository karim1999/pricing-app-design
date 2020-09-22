<template>
  <div class="footer-container">
    <div class="footer-section">
      <div class="list-container">
        <h1 class="logo">Logo</h1>
        <h2 class="description">
          A comprehensive assessment management platform that brings new
          dimensions to the way educators author, deliver and track their
          assessments with an outcome-based strategy to empower and understand
          student progress.
        </h2>
      </div>
      <div v-for="index in 3" :key="index" class="list-container">
        <h1>Sectors</h1>
        <ul>
          <li><a href="">K-12</a></li>
          <li><a href="">Higher Education</a></li>
          <li><a href="">Vocational Education</a></li>
          <li><a href="">Certification Centers</a></li>
          <li><a href="">Corporate Learning</a></li>
          <li><a href="">Content Providers</a></li>
        </ul>
      </div>
    </div>
    <div class="dashed-border"></div>
    <div class="footer-section" style="align-items: center">
      <div class="list-container">
        <h1 class="logo">Feature</h1>
      </div>
      <div v-for="index in 2" :key="index" class="list-container">
        <ul>
          <li><a href="">K-12</a></li>
          <li><a href="">Higher Education</a></li>
          <li><a href="">Vocational Education</a></li>
          <li><a href="">Certification Centers</a></li>
          <li><a href="">Corporate Learning</a></li>
          <li><a href="">Content Providers</a></li>
          <li><a href="">Certification Centers</a></li>
          <li><a href="">Corporate Learning</a></li>
          <li><a href="">Content Providers</a></li>
        </ul>
      </div>
      <div class="list-container">
        <img src="../../assets/footer-social.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>

<style scoped lang="scss">
.footer-container {
  background-color: #f6f7fb;
  min-height: 700px;
  margin-top: 50px;
  padding-top: 50px;
  .footer-section {
    @include display-flex(row, space-evenly, flex-start, wrap);
    .list-container {
      padding: 20px;
      h1 {
        font-family: $font1;
        font-size: 25px;
        font-weight: $semibold_weight;
        &.logo {
          font-size: 35px;
        }
      }
      .description {
        font-family: $font2;
        color: $secondary2_color;
        font-size: 17px;
        font-weight: $medium_weight;
        max-width: 400px;
      }
      ul {
        padding-left: 0;
        li {
          list-style-type: none;
          margin-bottom: 20px;
          a {
            font-family: $font2;
            color: #707070;
            font-size: 17px;
            font-weight: $medium_weight;
          }
        }
      }
    }
  }
  .dashed-border {
    background-image: linear-gradient(
      to right,
      rgba(112, 112, 112, 0.25) 33%,
      rgba(255, 255, 255, 0) 0%
    );
    background-position: bottom;
    background-size: 200px 2px;
    background-repeat: repeat-x;
    height: 20px;
    margin: 100px 150px;
  }
}
</style>
