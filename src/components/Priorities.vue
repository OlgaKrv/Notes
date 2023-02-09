/* eslint-disable */
<template>
  <div class="prioritis">
    <div
      v-for="type in types"
      :key="type.id"
      class="prioritis_type"
      :style="priorityStyle(type.id)"
      @mouseover="type.show = true"
      @mouseout="type.show = false"
    >
      <div class="prioritis_header item_text">
        <input
          v-model="selectedType"
          class="input_radio"
          type="radio"
          :value="type"
          @change="prioritySelection(selectedType.id)"
        />
        <div>{{ type.title }}</div>
      </div>
      <transition name="prioritis_animated">
        <p v-if="type.show">
          {{ type.description }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      type: 0,
      selectedType: {
        id: 0,
        title: '',
        show: false,
        description: '',
      },
      types: [
        {
          id: 0,
          title: 'Сделать',
          show: false,
          description:
            'Задачи с четкими дедлайнами, влияющие на последующую работу',
        },
        {
          id: 1,
          title: 'Отложить',
          show: false,
          description:
            'Задачи без четких сроков сдачи но влияющие на общий результат',
        },
        {
          id: 2,
          title: 'Делегировать',
          show: false,
          description:
            'Задачи, которые нужно сделать, но так как они не требуют ' +
            'ососбых навыков, их можно делегировать',
        },
        {
          id: 3,
          title: 'Удалить',
          show: false,
          description:
            'Активности, которые негативно сказываются на продуктивности',
        },
      ],
    }
  },
  computed: mapGetters(['noteColorSelection']),
  methods: {
    ...mapMutations(['selectNotePriority']),
    priorityStyle(num) {
      return {
        'background-color': this.noteColorSelection(num),
      }
    },
    prioritySelection(selectedTypeNum) {
      this.selectNotePriority(selectedTypeNum)
    },
  },
}
</script>

<style lang="scss" setup>
.prioritis {
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  flex-direction: row;

  p {
    font-size: 18px;
  }
}

.prioritis_header {
  display: flex;
}

.input_radio {
  margin-right: 15px;
}

.prioritis_animated-enter-active,
.prioritis_animated-leave-active {
  transition: opacity 0.5s ease;
  transition-delay: 0.5s !important;
}

.prioritis_animated-enter-from,
.prioritis_animated-leave-to {
  opacity: 0.2;
}

.prioritis_type {
  width: 23%;
  padding: 18px;
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.25);

  &:hover {
    box-shadow: 10px 30px 30px rgba(51, 153, 66, 0.3);
    transform: translate(0, -6px);
    transition-delay: 0s !important;
  }
}

input:not(input:nth-child(2)) {
  cursor: pointer;
}
</style>
