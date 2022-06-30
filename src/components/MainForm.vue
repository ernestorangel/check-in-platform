<script>
import TimeCounter from './TimeCounter.vue';
import { useRecoilState } from 'vue-recoil';
import { atomState, companyAtom, employeeAtom } from '../store/atom.js';
import { useToast } from 'vue-toast-notification';

export default {
  name: 'MainForm',
  data() {
    return {
      company_code_input: '',
      employee_code_input: '',
      timestamp: '',
      isLoadingBank: false
    }
  },
  components: {
    TimeCounter
  },
  methods: {
    async handleClick(index) {
      const $toast = useToast();
      const [count, setCount] = useRecoilState(atomState);
      const [company, setCompany] = useRecoilState(companyAtom);
      const [employee, setEmployee] = useRecoilState(employeeAtom);

      let toast;

      switch (index) {
        case 0:
          this.isLoading = true;
          let timestamp = new Date();
          const result = await fetch(`http://localhost:8080/clockin?company_code=${this.company_code_input}&employee_code=${this.employee_code_input}&timestamp=${timestamp}`);
          console.log(result.status)
          if (result.status == 200) $toast.open({ message: 'Ponto registrado com sucesso', type: 'success', position: 'top-right', duration: 5000 })
          else $toast.open({ message: 'Credenciais inválidas!', type: 'error', position: 'top-right', duration: 5000 })
          setTimeout(() => { this.isLoading = false; }, 3 * 1000);
          break;
        case 2:
          this.isLoadingBank = true;
          let response = await fetch(`http://localhost:8080/bank?company_code=${this.company_code_input}&employee_code=${this.employee_code_input}`);
          if (response.status == 200) {
            setCompany(this.company_code_input)
            setEmployee(this.employee_code_input)
            toast = { message: 'Histórico recuperado com sucesso', type: 'success', position: 'top-right', duration: 3 * 1000 }
            let data = await response.json();
            setCount(data);
          } else {
            setCount(false);
            console.log(count.value)
            toast = { message: 'Credenciais inválidas!', type: 'error', position: 'top-right', duration: 3 * 1000 }
          }
          setTimeout(() => {
            this.isLoadingBank = false;
            $toast.open({ message: toast.message, type: toast.type, position: toast.position, duration: toast.duration })
            if (response.status == 200) this.$router.push('/bank')
          }, 2 * 1000);
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
        <input id="username" type="text" name="company_code_input" v-model="company_code_input"
          placeholder="Código do empregador">
        <input id="password" type="password" name="employee_code_input" v-model="employee_code_input"
          placeholder="Código do colaborador">
      </div>
      <button id="main-button" form="app-form" type="submit" action="POST" @click="handleClick(0)">Bater Ponto</button>
      <div id="app-form-other-options">
        <button class="optional-button" id="left-opt-button" form="app-form" type="submit" action="POST"
          @click="handleClick(2)" v-if="!isLoadingBank">Histórico</button>
        <button class="optional-button" id="left-opt-button" form="app-form" v-else>
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
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

input#username,
input#password {
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
  cursor: pointer;
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
  background-color: transparent;
  border: 0px;
  font-size: 18px;
  font-weight: 600;
  color: orange;
  cursor: pointer;
}

.optional-button:hover {
  background-color: orange;
  color: white;
}

#left-opt-button {
  height: 60px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

#right-opt-button {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}
</style>