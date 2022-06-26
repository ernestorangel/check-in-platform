<script>
import TimeCounter from './TimeCounter.vue';
export default {
  name: 'MainForm',
  components: {
    TimeCounter
  }
}
</script>

<template>
  <div id="form-container">
    <form id="app-form">
      <TimeCounter />
      <div id="input-holder">
        <input type="text" v-model="input_name" placeholder="Código do empregador">
        <input type="text" v-model="input_name" placeholder="Código do colaborador">
      </div>
      <button id= "main-button" type="submit" form="app-form" value="Submit">Bater Ponto</button>
      <div id="app-form-other-options">
        <button class="optional-button" id="left-opt-button" type="submit" form="app-form" value="Submit">Pontos em atraso</button>
        <button class="optional-button" id="right-opt-button" type="submit" form="app-form" value="Submit">Banco de Horas</button>
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
    padding-top: 30px;
  }

  #app-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #input-holder {
    margin: 0px 30px;
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

  .optional-button {
    width: 50%;
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