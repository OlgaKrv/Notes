<template>
  <div>
    <div class="note_header item_text">
      <p>{{ note.title }}</p>
      <button class="note_delete" @click="removeNote(note.id)">x</button>
    </div>
    <div class="note_body">
      <p>{{ note.description }}</p>
      <span class="small_text">{{ note.date }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    note: {
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
