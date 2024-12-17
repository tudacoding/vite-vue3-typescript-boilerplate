<template>
  <h2>HomeView</h2>
  <button @click="goToAbout">Go to About</button>
  <Vue3Lottie :animationData="AstronautJSON" :height="200" :width="200" />
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import AstronautJSON from '../assets/lottie.json'
export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      AstronautJSON,
    }
  },
  methods: {
    goToAbout() {
      this.$router.push('/about')
    },
  },
}
</script>
