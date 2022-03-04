<script setup lang="ts">
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

<style lang="less">
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-size: 1.25em;
  margin-right: 0.32rem;
}
</style>
