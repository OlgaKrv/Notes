<template>
  <div class="blank-title-message">
    <p>Предупреждение - {{ blankTitleMessage }}</p>
  </div>
</template>

<script>
  export default {
    props: {
      blankTitleMessage: {
        type: String,
        required: true
      }
    }
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