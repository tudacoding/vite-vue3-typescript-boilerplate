<script setup lang="ts">
import HelloWorld from '@components/HelloWorld.vue'
import { useTestStore } from '@/store/test' // Importing the test store

const testStore = useTestStore() // Creating an instance of the test store
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <v-container>
    <v-row>
      <v-col>
        <v-btn color="primary">Primary Button</v-btn>
        <v-icon color="white">mdi-home</v-icon>
        <v-icon color="primary">mdi-account</v-icon>
        <v-icon color="primary">mdi-settings</v-icon>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Card Title</v-card-title>
          <v-card-text>This is some text within a card.</v-card-text>
          <v-card-actions>
            <v-btn color="green">Action 1</v-btn>
            <v-btn color="red">Action 2</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <p>
    <strong>Current count:</strong> {{ testStore.count }}
    <!-- Displaying the current count from the store -->
  </p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
