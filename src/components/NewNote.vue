<template>
  <div>
    <div class="new-note">
      <label class="item_text">Заголовок</label>
      <input v-model="newTitle" type="text" />
      <label class="item_text">Описание</label>
      <textarea v-model="newDescription"></textarea>
      <priorities />
      <button class="btn btn_primary" @click="addNote">Новая заметка</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import priorities from "./Priorities.vue";

export default {
  components: {
    priorities,
  },
  data() {
    return {
      newTitle: "",
      newDescription: "",
    };
  },
  computed: {
    ...mapGetters([
      "getAllNote",
      "isNoteTitleEmpty",
      "getPrioritySelectedNote",
    ]),
  },
  methods: {
    ...mapMutations(["addNewNote", "filledTitle"]),
    addNote() {
      this.filledTitle(this.newTitle);
      if (!this.isNoteTitleEmpty) {
        this.addNewNote({
          id: this.getAllNote.length - 1,
          title: this.newTitle,
          description: this.newDescription,
          date: new Date(Date.now()).toLocaleDateString(),
          type: this.getPrioritySelectedNote,
        });
      }
      this.newTitle = "";
      this.newDescription = "";
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
