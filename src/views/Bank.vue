<script>
import ListModule from '../components/ListModule.vue';
import ListHeader from '../components/ListHeader.vue'
import ListFooter from '../components/ListFooter.vue'

export default {
  name: "Bank",
  components: {
    ListModule,
    ListHeader,
    ListFooter
  }
  // ,
  // methods: {
  //   create() {
  //     let response = await fetch(`http://localhost:8080/bank?company_code=${this.company_code_input}&employee_code=${this.employee_code_input}`);
  //     let data = await response.json();
  //     console.log(data);
  //   }
  // }
}

</script>

<template>
  <div id="main-container">
    <!-- <h2>Banco de Horas</h2> -->
    <ListHeader label_1="Mês" label_2="Horas Esperadas" label_3="Horas Trabalhadas"></ListHeader>
    <ListModule label_1="06/2022" label_2="176h" label_3="180h"></ListModule>
    <ListModule label_1="05/2022" label_2="176h" label_3="180h"></ListModule>
    <ListModule label_1="04/2022" label_2="176h" label_3="180h"></ListModule>
    <ListModule label_1="03/2022" label_2="176h" label_3="180h"></ListModule>
    <ListModule label_1="02/2022" label_2="176h" label_3="180h"></ListModule>
    <ListModule label_1="01/2022" label_2="176h" label_3="180h"></ListModule>
    <ListFooter label_1="Total" label_2="1056h" label_3="1080h"></ListFooter>
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
</style>