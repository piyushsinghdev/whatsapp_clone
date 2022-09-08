import { useState } from 'react';
import style from '../../styles/msgInput.module.css'
import { useStoreActions } from 'easy-peasy';
import { useParams } from 'react-router-dom';

const MsgInput=(props)=>{
    let params = useParams();
    const [message,setMessage]=useState("")
    const selectMessage = useStoreActions((actions)=>actions.selectMessage)
    const addmessage = useStoreActions((actions) => actions.addmessage);



    const messageHandler=(message)=>{
        // if(message === undefined || message === null){
            addmessage(message)
            setMessage(" ")
            selectMessage()
        
               
    }

   const keyPressHandler=(e,message)=>{
        if(e.key==="Enter"){
            messageHandler(message)
            selectMessage()
        }
   }

    return(
        <div className={style.container}>
            
            <img  className={style.emoji} alt="" src="https://www.kindpng.com/picc/m/87-871623_emoji-sticker-face-emoticon-emoji-icon-emoji-png.png"/>
            <input onKeyUp={(e)=>keyPressHandler(e,{
                message:message,
                id:params.id,
                replyInfo:props.replyInfo

            })} onChange={(e)=>setMessage(e.target.value)} value={message} className={style.input} placeholder="Type the message"/>
            <img className={style.image} alt="" src="https://static.thenounproject.com/png/1015122-200.png" onClick={()=>messageHandler({
                message:message,
                id:params.id,
                replyInfo:props.replyInfo
                
            })}/>
        </div>
    )
}

export default MsgInput;