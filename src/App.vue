<template>
  <div id="app" class="project-wrapper">
    <div class="project-title">
      <!-- blank title message -->
      <transition name="message-animation">
        <message v-if="isNoteTitleEmpty" :blankTitleMessage="blankTitleMessage"/>
      </transition>

    </div>
  </div>
</template>

<script>
import message from '@/components/Message'

export default {
  components: {
    message
  },
  data() {
    return{
      title: 'Блокнот',
      isNoteTitleEmpty: false,
      blankTitleMessage: ""
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


.message-animation-enter-active {
  animation: message-animation-in .5s ease-out both;
}
.message-animation-leave-active {
  animation: message-animation-in .5s reverse ease-in both;
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
