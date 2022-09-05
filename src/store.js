import { createStore,action } from 'easy-peasy';
import { usersdata } from './data';

export const store = createStore({
  userInfo: usersdata,
  user:"",

  userClick: action((state, payload) => {
    console.log(payload)
    state.user=payload
  }),

  addmessage:action((state,payload)=>{
    state.userInfo.push(payload)
  })
});