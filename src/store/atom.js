import { atom } from 'vue-recoil';

export const atomState = atom({
    key: 'counter',
    default: 1,
})

export const companyAtom = atom({
    key: 'companyAtom',
    default: ''
})

export const employeeAtom = atom({
    key: 'employeeAtom',
    default: ''
})