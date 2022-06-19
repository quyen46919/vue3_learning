<template>
  <div class="header">
    <router-link to="/">Tasks</router-link>
    <router-link to="/noti">Notifications</router-link>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Header'
  }
</script>

<style>
  .header {
    height: 70px;
    width: 100%;
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #f2f2f2;
    font-weight: 500;
    color: gray;
  }
  .header a {
    font-size: 20px;
    text-decoration: none;
    color: inherit;
  }
  .header a.router-link-active {
    color: rgb(19, 19, 19);
  }
</style>
