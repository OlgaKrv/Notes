<template>
  <svg
    width="15mm"
    height="15mm"
    version="1.1"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g v-html="path" :fill="iconColor"></g>
  </svg>
</template>

<script>
import icons from "../icons";

export default {
  props: {
    name: {
      type: String,
      default: "grid",
    },
    isSelected: {
      type: Object,
    },
  },
  data() {
    return {
      path: icons[this.name],
      isSelectedPosition: this.name === "grid",
      iconColor: this.name === "grid" ? "#339942" : "#71bf7c",
    };
  },
  methods: {},
  watch: {
    isSelected() {
      this.isSelectedPosition = this.isSelected;
      /* eslint-disable */
      this.iconColor = this.name === "grid" ? this.isSelectedPosition ? "#339942" : "#71bf7c" : this.isSelectedPosition ? "#71bf7c" : "#339942";
    },
  },
};
</script>

<style lang="scss">
.icons {
  svg {
    margin-right: 15px;
    cursor: pointer;
    &:last-child {
      margin-right: 0px;
    }
    &:hover {
      transform: scale(1.2);
      transition-delay: 0.2s !important;
    }
  }
}
</style>
