<template>
  <div class="container">
    <header-component
      :title="title"
      :description="description"
      :img="img"
    ></header-component>
    <div class="form-content">
      <div class="row">
        <h1>Basic information</h1>
      </div>
      <div class="row">
        <div class="form-element">
          <label for=""
            >What is the product type ? <span class="required">*</span></label
          >
          <div class="input-container">
            <input placeholder="Product Type" type="text" />
            <img src="../assets/contract-icon.png" alt="" />
          </div>
        </div>
        <div class="form-element">
          <label for=""
            >Feature Plan you choose <span class="required">*</span></label
          >
          <div class="input-container">
            <input placeholder="Add-Ons" type="text" />
            <img src="../assets/puzzle-icon.png" alt="" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="form-element row">
          <label for=""
            >What is the type of institution?
            <span class="required">*</span></label
          >
          <label class="radio">
            <input type="radio" name="institution" />
            Business
          </label>
          <label class="radio">
            <input type="radio" name="institution" />
            Commercial
          </label>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <label for=""
            >Number of licenses / vouchers you need
            <span class="required">*</span></label
          >
          <div class="input-container">
            <input placeholder="Select a number" type="number" />
          </div>
        </div>
      </div>
      <div class="row">
        <h1>Training Requirements</h1>
      </div>
      <div class="row">
        <div class="form-element row">
          <label for=""
            >Is training required? <span class="required">*</span></label
          >
          <label class="radio">
            <input type="radio" name="institution" />
            Business
          </label>
          <label class="radio">
            <input type="radio" name="institution" />
            Commercial
          </label>
        </div>
      </div>
      <div class="row">
        <p class="note">
          In order to proceed to the next step, it is necessary to fill in the
          information above. Please note that all fields that are marked with an
          asterisk (*) are required!
        </p>
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
export default {
  name: "Home",
  components: {
    HeaderComponent
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
<style lang="scss" scoped>
.form-content {
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
  .form-element {
    margin-right: 50px;
  }
  .radio {
    color: #676767;
  }
  .required {
    color: $secondary2_color;
  }
  .btn-container {
    justify-content: flex-end;
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
}
</style>
