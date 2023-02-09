<template>
  <div class="blank-title-message">
    <p>Предупреждение - {{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    }
  },
  created() {
    this.message = this.$store.getters.getMes
  },
}
</script>

<style lang="scss" scoped>
.blank-title-message {
  text-align: center;
  padding: 20px;
}
p {
  color: #ba3838;
}
</style>
