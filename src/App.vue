<script setup>
</script>

<template>
  <header>
      <router-link to="/" id="logo">
        ClockIn.com
      </router-link>
  </header>
  <main>
    <router-view></router-view>
  </main>
</template>

<style>
@import './assets/base.css';

header { 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}

#logo {
  color:orange;
  font-size: 80px;
  font-weight: 800;
  text-shadow: 2px 2px 2px lightgray;
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
