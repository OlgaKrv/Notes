<template>
  <div class="prioritis">
    <div
      class="prioritis_type"
      v-for="type in types"
      :key="type.id"
      @mouseover="type.show = true"
      @mouseout="type.show = false"
    >
      <div class="prioritis_header item_text">
        <input
          class="input_radio"
          type="radio"
          :value="type"
          v-model="selectedType"
          @click="prioritySelection"
        />
        <div>{{ type.title }}</div>
      </div>
      <transition name="prioritis_animated">
        <p v-if="type.show">{{ type.description }}</p>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // selectedType: {
      //   id: 0,
      //   title: '',
      //   show: false,
      //   description: '',
      // },
      types: [
        {
          id: 0,
          title: "Сделать",
          show: false,
          description:
            "Задачи с четкими дедлайнами, влияющие на последующую работу",
        },
        {
          id: 1,
          title: "Отложить",
          show: false,
          description:
            "Задачи без четких сроков сдачи но влияющие на общий результат",
        },
        {
          id: 2,
          title: "Делегировать",
          show: false,
          description:
            "Задачи, которые нужно сделать, но так как они не требуют " +
            "ососбых навыков, их можно делегировать",
        },
        {
          id: 3,
          title: "Удалить",
          show: false,
          description:
            "Активности, которые негативно сказываются на продуктивности",
        },
      ],
    };
  },
  // methods: {
  //   prioritySelection() {
  //     this.$emit('select', this.selectedType.id)
  //   },
  // },
};
</script>
