<template>
  <div id="app" class="project-wrapper">
    <div class="app-title">
      {{ title }}
    </div>
    <!-- blank title message -->
    <newNote />
    <notes />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import newNote from './components/NewNote.vue'
import notes from './components/Notes.vue'

export default {
  components: {
    newNote,
    notes,
  },
  data() {
    return {
      title: 'Блокнот',
    }
  },
  computed: mapGetters(['isNoteTitleEmpty']),
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

.app-title {
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 32px;
  color: #339942;
}

.minimum-size {
  min-width: 220px;
}
</style>
