<script setup>
import MainForm from './components/MainForm.vue';
</script>

<template>
  <header>
    <h1>Clock In</h1>
  </header>
  <main>
    <MainForm />
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

h1 {
  font-size: 80px;
  font-weight: 800;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

</style>
