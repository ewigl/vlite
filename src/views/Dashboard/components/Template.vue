<script setup lang="ts">
// import
defineProps<{
  msg: string
  name?: string
}>()
</script>

<template>
  {{ msg }}
</template>
