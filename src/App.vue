<script setup lang="ts">

</script>

<template>
  <router-link to="/hello">hello</router-link>
  <br>
  <router-link to="/layout">layout</router-link>
  <br>
  <router-link to="/dashboard">dashboard</router-link>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
