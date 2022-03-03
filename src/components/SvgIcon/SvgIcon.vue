<script setup lang="ts">
import { defineProps } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: '',
    required: true
  }
})
</script>

<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="'#' + name"></use>
  </svg>
</template>
