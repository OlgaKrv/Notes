<template>
  <div>
    <div class="note_header item_text">
      <p>{{ noteItem.title }}</p>
      <button class="note_delete" @click="removeNote(noteItem.id)">x</button>
    </div>
    <div class="note_body">
      <p>{{ noteItem.description }}</p>
      <span class="small_text">{{ noteItem.date }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    noteItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations(['removeNote']),
  },
}
</script>

<style lang="scss">
.note_delete {
  cursor: pointer;
}
</style>
