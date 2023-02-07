<template>
  <div class="wrapper__note">
    <!-- search -->
    <search
      :value="search"
      placeholder="Найдите свою заметку"
      @search="search = $event"
    />
    <!-- icons controls -->
    <div class="icons">
      <positionIcon :isSelected="gridPosition" name="grid" />
      <positionIcon :isSelected="gridPosition" name="column" />
    </div>
    <noteItem
      :note="note"
      v-for="note in getAllNote"
      :key="note.id"
      :style="noteStyle(note.type)"
    />
  </div>
</template>
<!-- @remove="removeNote" -->

<script>
import { mapGetters } from "vuex";
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
      grid: true,
    };
  },
  computed: mapGetters(["getAllNote", "getСolorForNeed"]),
  methods: {
    noteStyle(num) {
      return {
        "background-color": this.getСolorForNeed(num),
      };
    },
  },
};
</script>

<style lang="scss">
.notes_area {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wrapper__note {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;
  padding: 40px 0;
}
</style>
