<template>
  <div class="note">
    <div class="note_header item_text" :class="{ full: !grid }">
      <input v-if="showInput" @click="showInputOnClick" type="text" />
      <p v-else @click="showInputOnClick">{{ note.title }}</p>
      <p class="note_delete" @click="removeNote(0)">x</p>
    </div>
    <div class="note_body">
      <p>{{ note.description }}</p>
      <span class="small_text">{{ note.date }}</span>
    </div>
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
  methods: {
    removeNote(index) {
      this.$store.dispatch("removeNote", index);
    },
  },
};
</script>

<style lang="scss">
.note {
  width: 48%;
  padding: 18px 20px;
  margin-top: 20px;
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
.note_delete {
  cursor: pointer;
}
</style>
