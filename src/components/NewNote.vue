<template>
  <div>
    <div class="new-note">
      <label class="item_text">Заголовок</label>
      <input v-model="newNote.title" type="text" />
      <label class="item_text">Описание</label>
      <textarea v-model="newNote.description"></textarea>
      <priorities @select="newNote.type" />
      <button class="btn btn_primary" @click="addNote">Новая заметка</button>
    </div>
  </div>
</template>

<script>
import priorities from "./Priorities.vue";

export default {
  components: {
    priorities,
  },
  data() {
    return {
      newNote: {},
    };
  },
  created() {
    this.newNote = this.$store.getters.getNewNote;
  },
  methods: {
    addNote() {
      this.$store.dispatch("filledTitle", this.newNote.title);
      this.$store.dispatch("getNewNote", this.newNote);
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
