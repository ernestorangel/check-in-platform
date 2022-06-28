<script>
import TimeCounter from './TimeCounter.vue';

export default {
  name: 'MainForm',
  data () {
    return {
      company_code_input: '',
      employee_code_input: '',
      timestamp: ''
    }
  },
  components: {
    TimeCounter
  },
  methods: {
    async handleClick(index) {
      switch(index) {
        case 0:
          let timestamp = new Date();
          await fetch(`http://localhost:8080/clockin?company_code=${this.company_code_input}&employee_code=${this.employee_code_input}&timestamp=${timestamp}`);
          break;
        case 1:
          await fetch(`http://localhost:8080/edit?company_code=${this.company_code_input}&employee_code=${this.employee_code_input}`);
          break;
        case 2:
          let response = await fetch(`http://localhost:8080/bank?company_code=${this.company_code_input}&employee_code=${this.employee_code_input}`);
          let data = await response.json();
          console.log(data);
          break;
        default:
          console.log('error: no valid button pressed.')
      }
    }
  }
}

</script>

<template>
  <div id="form-container">
    <form id="app-form" @submit.prevent="onSubmit">
      <TimeCounter />
      <div id="input-holder">
        <input id="username" type="text" name="company_code_input" v-model="company_code_input" placeholder="Código do empregador">
        <input type="password" name="employee_code_input" v-model="employee_code_input" placeholder="Código do colaborador">
      </div>
      <button id= "main-button" form="app-form" type="submit" action="POST" @click="handleClick(0)">Bater Ponto</button>
      <div id="app-form-other-options">
        <router-link to="/edit" class="buttonHolder">
          <button class="optional-button" id="left-opt-button"  form="app-form" type="submit" action="POST" @click="handleClick(1)">Editar Manualmente</button>
        </router-link>
        <router-link to="/bank" class="buttonHolder">
          <button class="optional-button" id="right-opt-button"  form="app-form" type="submit" action="POST" @click="handleClick(2)">Banco de Horas</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<style>
  #form-container {
    width: auto;
    height: auto;
    background-color: #fafafa;
    border-radius: 20px;
    padding-top: 0px;
    box-shadow: 2px 2px 5px lightgray;
  }

  #app-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #input-holder {
    width: 100%;
    padding: 0px 30px;
  }

  input {
    width: 100%;
    height: 60px;
    margin-top: 30px;
    border-radius: 20px;
    border: 1px solid lightgray;
    padding: 5px 20px;
    color: orange;
    font-size: 20px;
  }

  #main-button {
    height: 60px;
    width: 200px;
    margin-top: 30px;
    border-radius: 20px;
    border: 1px solid orange;
    background-color: orange;
    font-size: 20px;
    font-weight: 800;
    color: white;
  }

  #main-button:hover {
    background-color: white;
    color: orange;
    border: 1px solid lightgray;
  }

  #app-form-other-options {
    margin-top: 30px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid lightgray;
  }

  .buttonHolder {
    width: 100%;
  }

  .optional-button {
    width: 100%;
    height: 100%;
    padding: 20px 0px;
    background-color: transparent;
    border: 0px;
    font-size: 15px;
    color: orange;
  }

  .optional-button:hover {
    background-color: orange;
    color: white;
  }

  #left-opt-button {
    border-bottom-left-radius: 20px;
  }

  #right-opt-button {
    border-bottom-right-radius: 20px;
  }

</style>