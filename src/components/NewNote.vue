<template>
  <div>
    <transition name="message-animation">
      <div v-if="isTitleComplete" class="blank-title-message">
        <p>Предупреждение - {{ message }}</p>
      </div>
    </transition>
    <div class="new-note">
      <label class="item_text">Заголовок</label>
      <input v-model="newTitle" type="text" />
      <label class="item_text">Описание</label>
      <textarea v-model="newDescription" />
      <priorities />
      <button class="btn btn_primary" @click="addNote">Новая заметка</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import priorities from './Priorities.vue'

export default {
  components: {
    priorities,
  },
  data() {
    return {
      newTitle: '',
      newDescription: '',
      message: 'Заголовок не может быть пустым!',
      isTitleComplete: false,
    }
  },
  computed: {
    ...mapGetters(['allNotes', 'selectedNotePriority']),
  },
  methods: {
    ...mapMutations(['addNewNote']),
    addNote() {
      if (this.newTitle !== '') {
        this.isTitleComplete = false
        this.addNewNote({
          id: this.allNotes.length,
          title: this.newTitle,
          description: this.newDescription,
          date: new Date(Date.now()).toLocaleDateString(),
          type: this.selectedNotePriority,
        })
      } else this.isTitleComplete = true
      this.newTitle = ''
      this.newDescription = ''
    },
  },
}
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
.blank-title-message {
  text-align: center;
  padding: 20px;
  color: #ba3838;
}
.message-animation-enter-active {
  animation: message-animation-in 0.5s ease-out both;
}
.message-animation-leave-active {
  animation: message-animation-in 0.5s reverse ease-in both;
}
@keyframes message-animation-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
