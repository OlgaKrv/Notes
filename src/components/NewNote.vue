<template>
  <div>
    <div class="new-note">
      <label class="item_text">Заголовок</label>
      <input v-model="newNote.title" type="text" />
      <label class="item_text">Описание</label>
      <textarea v-model="newNote.descr"></textarea>
      <prioritis @select="newNote.type" />
      <button class="btn btn_primary" @click="addNote">Новая заметка</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newNote: null,
    };
  },
  props: {
    isNoteTitleEmpty: {
      type: Boolean,
      required: true,
    },
  },
  created() {
    this.newNote = this.$store.getters.getNewNote;
  },
  methods: {
    addNote() {
      this.$store.dispatch("setNewNote");
      // this.isNoteTitleEmpty = this.newNote.title;
      // this.$emit('addNote', this.isNoteTitleEmpty)
    },
  },
};
</script>

<style lang="scss">
.new-note {
  text-align: center;
  input:nth-child(2),
  textarea {
    width: 100%;
    min-width: 220px;
  }
}
</style>
