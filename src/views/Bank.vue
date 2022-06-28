<script setup>
import ListModule from '../components/ListModule.vue';
import ListHeader from '../components/ListHeader.vue'
import ListFooter from '../components/ListFooter.vue'
import { ref } from 'vue'
import { useRecoilState } from 'vue-recoil';
import { atomState } from '../store/atom.js';

let [count, setCount] = useRecoilState(atomState);

const months = count;

</script>

<template>
  <div id="main-container">
    <form>
      <ListHeader label_1="Code" label_2="Label"></ListHeader>
      <div id="list-module-container">
        <ListModule v-for="month in months" :month="month" :key="month.id"></ListModule>
      </div>
      <ListFooter label_1="Total" label_2="1056h"></ListFooter>
    </form>
  </div>
</template>

<style>
#main-container {
  width: auto;
  height: auto;
  background-color: #fafafa;
  border-radius: 20px;
  /* padding: 20px; */
  box-shadow: 2px 2px 5px lightgray;
}

h2 {
  font-size: 30px;
  font-weight: 600;
}

#list-module-container {
  max-height: 600px;
  overflow-y: scroll;
}
</style>