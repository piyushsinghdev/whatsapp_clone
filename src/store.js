import { createStore, action } from 'easy-peasy';
import { usersdata } from './data';

export const store = createStore({
  userInfo: [usersdata],
  user:false,
  replyInfo:"",

  selectMessage: action((state, payload) => {
    state.replyInfo=payload
    state.user=payload?true:false
  }),
 
 

  addmessage: action((state, payload) =>  {
    state.userInfo[0].map((user) => {
      if (parseInt(user.id) === parseInt(payload.id)) {
        return user.message.push({
          messageType: "TEXT",
          text: payload.message,
          senderID: 0,
          messageID:Math.random()*10,
          replyID:payload.replyInfo?payload.replyInfo:""
        })
      }
      return user
    })
   
  }),

  deletemessage: action((state,payload)=>{
     state.userInfo[0].map((user) => {
      if (parseInt(user.id) === parseInt(payload.id)){
          return user.message.splice(payload.index,1)
      }
      return user
    })
  })

});

