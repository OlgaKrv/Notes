import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {},
  state: {
    noteList: [
      {
        id: 0,
        title: 'Первая заметка',
        description:
          'Задачи с четкими дедлайнами, влияющие на последующую работу',
        date: new Date(Date.now()).toLocaleDateString(),
        type: 0,
      },
      {
        id: 1,
        title: 'Вторая заметка',
        description:
          'Задачи без четких сроков сдачи но влияющие на общий результат',
        date: new Date(Date.now()).toLocaleDateString(),
        type: 1,
      },
      {
        id: 2,
        title: 'Третья заметка',
        description:
          'Задачи, которые нужно сделать, но так как они не требуют ососбых' +
          ' навыков, их можно делегировать',
        date: new Date(Date.now()).toLocaleDateString(),
        type: 2,
      },
      {
        id: 3,
        title: 'Четвертая заметка',
        description:
          'Активности, которые негативно сказываются на продуктивности',
        date: new Date(Date.now()).toLocaleDateString(),
        type: 3,
      },
    ],
    recalculatedId: 0,
    message: 'Заголовок не может быть пустым!',
    isNoteTitleEmpty: false,
    prioritySelectedNote: 0,
    colors: [
      { value: 0, color: '#76d589' },
      { value: 1, color: '#64d2da' },
      { value: 2, color: '#e8ce86' },
      { value: 3, color: '#e48c8c' },
    ],
  },
  mutations: {
    addNewNote(state, newNoteIndex) {
      state.noteList.push(newNoteIndex)
    },
    editNotes(state, newNotes) {
      if (newNotes)
        state.noteList = state.noteList.filter((item) => {
          return (
            item.toLowerCase().title.includes(newNotes.toLowerCase()) ||
            item.toLowerCase().description.includes(newNotes.toLowerCase())
          )
        })
    },
    removeNote(state, selectedNoteIndex) {
      state.noteList.splice(selectedNoteIndex, 1)
      state.noteList = state.noteList.map((note) =>
        note.id < selectedNoteIndex ? note : { ...note, id: note.id - 1 },
      )
    },
    filledTitle(state, titleText) {
      if (titleText === '') state.isNoteTitleEmpty = true
      else state.isNoteTitleEmpty = false
    },
    selectNotePriority(state, numberSelectedPriorities) {
      state.prioritySelectedNote = numberSelectedPriorities
    },
  },
  actions: {
    removeNote({ commit }, selectedNoteIndex) {
      commit('removeNote', selectedNoteIndex)
    },
  },
  getters: {
    getAllNote(state) {
      return state.noteList
    },
    getMes(state) {
      return state.message
    },
    isNoteTitleEmpty(state) {
      return state.isNoteTitleEmpty
    },
    getPrioritySelectedNote(state) {
      return state.prioritySelectedNote
    },
    getColorForNeed: (state) => (num) => {
      return state.colors[num].color
    },
  },
})
