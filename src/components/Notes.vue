/* eslint-disable */
<template>
  <div>
    <div class="note_header">
      <!-- search -->
      <!-- <search
        :value="search"
        placeholder="Найдите небходимую заметку"
        @search="search = $event"
      /> -->
      <!-- icons controls -->
      <div class="icons" @click="changeIconColor">
        <positionIcon :isSelected="gridPosition" name="grid" />
        <positionIcon :isSelected="gridPosition" name="column" />
      </div>
    </div>
    <div class="wrapper__note" :grid="gridPosition">
      <noteItem
        class="note minimum-size"
        :class="{ full: !gridPosition }"
        v-for="note in getAllNote"
        :note="note"
        :key="note.id"
        :style="noteStyle(note.type)"
      />
    </div>
  </div>
</template>
<!-- @remove="removeNote" -->

<script>
import { mapGetters } from "vuex";
import noteItem from "./NoteItem.vue";
import positionIcon from "./PositionIcon.vue";
// import search from "./Search.vue";

export default {
  components: {
    noteItem,
    positionIcon,
    // search,
  },
  data() {
    return {
      gridPosition: true,
    };
  },
  computed: {
    ...mapGetters(["getAllNote", "getСolorForNeed"]),
  },
  methods: {
    noteStyle(num) {
      return {
        "background-color": this.getСolorForNeed(num),
      };
    },
    changeIconColor() {
      this.gridPosition = !this.gridPosition;
    },
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
.note_header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.note_body {
  p {
    margin: 20px 0;
  }
}
</style>
