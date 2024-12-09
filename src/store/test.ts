import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => ({
    count: 0,
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
