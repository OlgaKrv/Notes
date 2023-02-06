<template>
  <div class="wrapper__note">
    <!-- search -->
    <search
      :value="search"
      placeholder="Найдите свою заметку"
      @search="search = $event"
    />
    <!-- icons controls -->
    <div class="icons" @click="changeIconColor">
      <positionIcon :isSelected="gridPosition" name="grid" />
      <positionIcon :isSelected="gridPosition" name="column" />
    </div>
    <noteItem v-for="note in noteList" :key="note.id" :note="note" />
  </div>
</template>

<script>
import noteItem from "./NoteItem.vue";
import positionIcon from "./PositionIcon.vue";
import search from "./Search.vue";

export default {
  components: {
    noteItem,
    positionIcon,
    search,
  },
  data() {
    return {
      noteList: null,
    };
  },
  created() {
    this.noteList = this.$store.getters.getNoteList;
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
