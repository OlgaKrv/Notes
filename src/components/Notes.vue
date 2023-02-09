<template>
  <div>
    <div class="note_header">
      <!-- search -->
      <!-- <search /> -->
      <!-- icons controls -->
      <div class="icons">
        <selectNotePosition @selectPositionType="gridPosition = $event" />
      </div>
    </div>
    <div class="wrapper__note">
      <noteItem
        v-for="noteItem in allNotes"
        :key="noteItem.id"
        class="note minimum-size"
        :class="{ full: gridPosition == 'column' }"
        :noteItem="noteItem"
        :style="noteStyle(noteItem.type)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import noteItem from './NoteItem.vue'
import selectNotePosition from './SelectNotePosition.vue'

// import search from "./Search.vue";

export default {
  components: {
    noteItem,
    selectNotePosition,
    // search,
  },
  data() {
    return {
      gridPosition: 'grid',
    }
  },
  computed: {
    ...mapGetters(['allNotes', 'getColorForNeed']),
  },
  methods: {
    noteStyle(num) {
      return {
        'background-color': this.getColorForNeed(num),
      }
    },
  },
}
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
