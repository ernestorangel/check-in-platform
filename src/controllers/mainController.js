import { useRecoilState } from 'vue-recoil';
import { atomState, companyAtom, employeeAtom } from '../store/atom.js';

const [count, setCount] = useRecoilState(atomState);
const [company, setCompany] = useRecoilState(companyAtom);
const [employee, setEmployee] = useRecoilState(employeeAtom);

const mainController = {
    setCredentials: async (companyCode, employeeCode) => {
        setCompany(companyCode);
        setEmployee(employeeCode);
    },
    registerNewClockin: async (companyCode, employeeCode) => {
        let timestamp = new Date();
        const response = await fetch(`http://localhost:8080/clockin?company_code=${companyCode}&employee_code=${employeeCode}&timestamp=${timestamp}`);
        return response
    },
    listClockinsByEmployee: async (companyCode, employeeCode) => {
        let response = await fetch(`http://localhost:8080/bank?company_code=${companyCode}&employee_code=${employeeCode}`);
        if (response.status == 200) {
            setCompany(companyCode);
            setEmployee(employeeCode);
            let data = await response.json();
            setCount(data);
            return true
        } else {
            return false
        };
    },
    changeTimestampOfClockin: async (checkinCode, date, hours, minutes, seconds) => {
        let [year, month, day] = date.split('-')
        let newTimestamp = new Date(year, month - 1, day, hours, minutes, seconds)
        let response = await fetch(`http://localhost:8080/edit?checkin_code=${checkinCode}&new_timestamp=${newTimestamp}`)
        if (response.status == 200) {
            mainController.listClockinsByEmployee(company.value, employee.value)
            return true
        } else {
            return false
        }
    },
    deleteClockin: async () => {
        let response = await fetch(`http://localhost:8080/delete?checkin_code=${checkinCode}`);
        if (response.status == 200) {
            
            return true
          } else {
            return false
          }
    }
}

module.exports = mainController;