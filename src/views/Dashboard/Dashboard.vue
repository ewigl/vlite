<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()
const routes = computed(() => {
  return router.options.routes
})

// const routes = computed(() => {
//   return useRoute().matched
// })
</script>

<template>
  <div>
    <!-- Dashboard -->
    {{ routes }}
  </div>
</template>

<style scoped></style>
