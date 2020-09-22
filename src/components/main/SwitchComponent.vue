<template>
  <div class="switch" @click="setSwitchValue">
    <div
      v-for="option in options"
      :key="option.value"
      :class="{ option: true, active: option.value === switchValue }"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SwitchComponent",
  props: ["value", "options"],
  data() {
    return {
      switchValue: this.value || this.options[0].value
    };
  },
  methods: {
    setSwitchValue() {
      if (this.switchValue === this.options[0].value) {
        this.switchValue = this.options[1].value;
      } else {
        this.switchValue = this.options[0].value;
      }
    }
  }
};
</script>

<style scoped lang="scss">
.switch {
  background-color: #fdeded;
  @include display-flex(row, center, center);
  border-radius: 60px;
  padding: 5px;
  cursor: pointer;
  .option {
    font-family: $font1;
    font-weight: $semibold_weight;
    font-size: 20px;
    padding: 10px 20px;
    color: $secondary2_color;
    border-radius: 70px;
    &.active {
      background-color: $white;
      color: $secondary3_color;
    }
  }
}
</style>
