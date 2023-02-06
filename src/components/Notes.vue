<template>
  <div class="wrapper__note">
    <noteItem v-for="note in noteList" :key="note.id" :note="note" />
  </div>
</template>

<script>
import noteItem from "./noteItem.vue";

export default {
  components: {
    noteItem,
  },
  data() {
    return {
      noteList: null,
    };
  },
  created() {
    this.noteList = this.$store.getters.getNoteList;
    console.log(this.noteList);
  },
};
</script>

<style lang="scss">
.wrapper__note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 40px 0;
}
</style>
