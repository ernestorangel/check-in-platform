<script setup>
import ListModule from '../components/ListModule.vue';
import ListHeader from '../components/ListHeader.vue'
import ListFooter from '../components/ListFooter.vue'
import { useRecoilState } from 'vue-recoil';
import { atomState, companyAtom, employeeAtom } from '../store/atom.js';
import { watch, watchEffect } from 'vue';

const [count, setCount] = useRecoilState(atomState);
const [company, setCompany] = useRecoilState(companyAtom);
const [employee, setEmployee] = useRecoilState(employeeAtom);

let companyCode = company.value;
let employeeCode = employee.value;

const checkins = count;

watchEffect({
  count(newCount) {
    console.log(newCount)
  }
})

console.log("stringzinha: ", count.value)

</script>

<template>
  <div id="main-container">
    <form @submit.prevent="onSubmit">
      <ListHeader label_1="Code" label_2="Label"></ListHeader>
      <div id="list-module-container">
        <ListModule v-for="checkin in checkins" :checkin="checkin" :key="checkin.id"></ListModule>
      </div>
      <ListFooter></ListFooter>
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