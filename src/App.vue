<script>
import DefaultLayout from "@/layouts/DefaultLayout.vue"

export default {
  name: 'App',
  components: {
    DefaultLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout
    }
  }
}
</script>

<template>
  <component :is="layout || 'div'" class="app">
    <router-view />
  </component>
</template>

<style scoped>
</style>
