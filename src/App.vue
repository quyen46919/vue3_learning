<template>
  <div id="my-app">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import Header from './components/Header.vue'

  export default {
    name: 'App',
    components: {
      Header
    }
  }
</script>

<style>
  body {
    margin: 0 !important;
    background-color: #efeef5;
  }
  #app {
    font-family: Nunito, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 700px;
    margin: 0 auto;
    background-color: white;
    border-radius: 10px;
    margin-top: 20px;
  }
</style>
