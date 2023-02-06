<template>
  <div class="note">
    <h1>{{ note.title }}</h1>
    <div>{{ note.description }}</div>
  </div>
</template>

<script>
export default {
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.note {
  width: 48%;
  padding: 18px 20px;
  margin-bottom: 20px;
  background-color: #fff;
  transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  &:hover {
    box-shadow: 10px 30px 30px hsla(129, 50%, 40%, 0.302);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
  &.full {
    width: 100%;
    text-align: center;
  }
}
</style>
