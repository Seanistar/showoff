<template>
  <div id="app">
    <app-header/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import AppHeader from '@/lib/Header'
import AppFooter from '@/lib/Footer'
export default {
  name: 'app',
  components: { AppHeader, AppFooter }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin: 10px 20px;
}
</style>
