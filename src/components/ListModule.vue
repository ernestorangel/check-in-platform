<script setup>
import { useToast } from 'vue-toast-notification';
import { useRecoilState } from 'vue-recoil';
import { atomState, companyAtom, employeeAtom } from '../store/atom.js';

const props = defineProps({
  checkin: Object,
})

let isEditTrayOn = false;

async function handleClick(operationTypeString, checkinCode) {
  const $toast = useToast();
  const [company, setCompany] = useRecoilState(companyAtom);
  let companyCode = company.value;
  console.log(companyCode.value)
  const [employee, setEmployee] = useRecoilState(employeeAtom);
  let employeeCode = employee.value;
  const [count, setCount] = useRecoilState(atomState);
  switch (operationTypeString) {
    case 'del':
      let response = await fetch(`http://localhost:8080/delete?checkin_code=${checkinCode}`);
      if (response.status == 200) {
        $toast.open({ message: 'Registro deletado com sucesso!', type: 'success', position: 'top-right', duration: 5000 })
        let newBank = await fetch(`http://localhost:8080/bank?company_code=${companyCode}&employee_code=${employeeCode}`);
        let data = await newBank.json();
        setCount(data);
        this.$router.push('/bank')
      } else {
        $toast.open({ message: 'Erro interno do servidor. Tente novamente.', type: 'error', position: 'top-right', duration: 5000 })
      }
      break;
    case 'upd':
      console.log(this.isEditTrayOn)
      this.isEditTrayOn = !this.isEditTrayOn
      let newBank = await fetch(`http://localhost:8080/bank?company_code=${companyCode}&employee_code=${employeeCode}`);
      let data = await newBank.json();
      setCount(data);
      this.$router.push('/bank')
      break;
    default:
      console.log("error: no valid button pressed")
  }
}

async function handleEdit(checkinCode, date, hours, minutes, seconds) {
  // TO-DO: Treat date if neededed
  const $toast = useToast();
  const [company, setCompany] = useRecoilState(companyAtom);
  let companyCode = company.value;
  const [employee, setEmployee] = useRecoilState(employeeAtom);
  let employeeCode = employee.value;
  const [count, setCount] = useRecoilState(atomState);
  let newTimestamp = new Date(year, month, day, hours, minutes, seconds)
  let response = await fetch(`localhost:8080/edit?checkin_code=${checkinCode}&new_timestamp=${newTimestamp}`)
  if (response.status == 200) {
    $toast.open({ message: 'Registro editado com sucesso!', type: 'success', position: 'top-right', duration: 5000 })
    let newBank = await fetch(`http://localhost:8080/bank?company_code=${companyCode}&employee_code=${employeeCode}`);
    let data = await newBank.json();
    setCount(data);
    this.$router.push('/bank')
  } else {
    $toast.open({ message: 'Erro interno do servidor. Tente novamente.', type: 'error', position: 'top-right', duration: 5000 })
  }
}

</script>

<template>
  <div id="full-module-holder">
    <div id="module-container">
      <div id="module-label"> {{ checkin.code }} </div>
      <div id="module-content"> {{ checkin.timestamp }} </div>
      <div id="module-options">
        <button class="edit-button" :id="checkin.code" @click="handleClick('upd', checkin.code)">Editar</button>
        <button class="delete-button" :id="checkin.code" @click="handleClick('del', checkin.code)">Deletar</button>
      </div>
    </div>
    <div id="edit-tray" v-if="isEditTrayOn">
      <div id="edit-tray-left"></div>
      <form id="edit-form">
        <label class="edit-form-label">Nova Data: </label>
        <input type="date" id="edit-form-date">
        <label class="edit-form-label">Hora: </label>
        <select type="number" class="edit-form-input">
          <option v-for="h in 24" :value="h - 1">{{ h - 1 }}</option>
        </select>
        <label class="edit-form-label">Minuto: </label>
        <select type="text" class="edit-form-input">
          <option v-for="m in 60" :value="m - 1">{{ m - 1 }}</option>
        </select>
        <label class="edit-form-label">Segundo: </label>
        <select type="text" class="edit-form-input">
          <option v-for="s in 60" :value="s - 1">{{ s - 1 }}</option>
        </select>
        <button id="submit-edit-button">OK</button>
      </form>
      <div id="edit-tray-right"></div>
    </div>
  </div>
</template>

<style>
#full-module-holder {
  border-bottom: 1px solid lightgray;
}

#module-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 80px;
  border-radius: 0px;
  /* border-bottom: 1px solid lightgray; */
  font-family: 'Roboto Mono', monospace;
}

#module-label {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 160px;
  font-size: 20px;
  font-weight: 800;
  /* border-right: 1px solid lightgray; */
}

#module-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: orange;
  font-size: 20px;
  font-weight: 400;
  width: 850px;
  height: 100%;
  padding: 0px 20px;
  white-space: nowrap;
  /* border-top-left-radius: 20px;
  border-top-right-radius: 20px; */
}

#module-options {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 200px;
  font-size: 20px;
  font-weight: 400;
  background-color: #fafafa;
  padding: 20px;
  /* border-left: 1px solid lightgray; */
}

.delete-button {
  width: 100px;
  cursor: pointer;
  height: 60%;
  border-radius: 20px;
  margin-left: 20px;
  background-color: rgb(218, 0, 0);
  color: white;
}

.edit-button {
  width: 100px;
  cursor: pointer;
  height: 60%;
  border-radius: 20px;
  background-color: orange;
  color: white;
}

#edit-tray {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 80px;
  transition: 2s;
  margin-bottom: 20px;
}

@keyframes edit-tray {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(1)
  }
}

#edit-form {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  height: 100%;
  width: 850px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

.edit-form-label {
  margin-right: 10px;
  color: orange;
}

#edit-form-date {
  margin-right: 30px;
  height: 40px;
  width: 150px;
  border-radius: 20px;
  font-size: 15px;
  padding: 5px 10px;
  font-weight: 600;
  background-color: orange;
  color: white;
}

.edit-form-input {
  margin-right: 30px;
  height: 40px;
  width: 60px;
  border-radius: 20px;
  font-size: 15px;
  padding: 5px 10px;
  font-weight: 600;
  background-color: orange;
  color: white;
}

#submit-edit-button {
  background-color: orange;
  color: #ffffff;
  font-size: 15px;
  font-weight: 800;
  height: 40px;
  width: 80px;
  border-radius: 20px;
}

#edit-tray-left {
  width: 160px;
}

#edit-tray-right {
  width: 200px;
}
</style>