import { atom } from 'vue-recoil';

export const atomState = atom({
    key: 'counter',
    default: 1,
})