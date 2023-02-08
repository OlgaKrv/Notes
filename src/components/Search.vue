<template>
  <div class="wrapper__search">
    <input
      class="small_text"
      type="text"
      placeholder="Найдите небходимую заметку"
      v-model="searchValue"
    />
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      searchValue: "",
    };
  },
  computed: {
    ...mapGetters(["getAllNote"]),
  },
  methods: {
    ...mapMutations(["editNotes"]),
  },
  watch: {
    searchValue(val) {
      this.editNotes(val);
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  color: #e4e4e4;
}
/* Search */
.wrapper__search {
  position: relative;
  width: 80%;
  display: flex;
  align-items: left;
}
input {
  padding: 16px 16px 16px 56px !important;
  margin-bottom: 0px;
  border-radius: 20px;
  font-size: 16px;
  width: 60%;
  height: auto;
}
</style>
