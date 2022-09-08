import style from '../../styles/chatmsg.module.css'
import Popup from 'reactjs-popup';
import PopupTable from '../PopupTable';
import { useEffect, useRef,  } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import Reply from './Reply';


const Chatmsg = (props) => {
  const table = ["Message info", "Reply", "React to message", "Forwardmessage", "starmessage", "Delete"]

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => scrollToBottom(), [props.user]);


  return (
    <>

      <InfiniteScroll dataLength={props.user.message.length} >
        {props.user.message.map((usermessage,index) =>
          <div className={usermessage.senderID === 0 ? style.msg : style.msg1} key={index}>
              
            <Popup position="bottom" trigger={<div className={usermessage.senderID === 0 ? style.chatmsg : style.chatmsg1}>
              {usermessage.replyID && <div style={{"marginBottom":"20px" ,"width":"auto"}}>
                <Reply replyInfo={usermessage.replyID} userInfo={props.user} />
                </div>}
              <div style={{"fontSize":"20px"}}>{usermessage.text}</div>
            </div>}>
              {close => (
                <>
                  <PopupTable replyHandler={props.replyHandler} close={close} index={index} message={usermessage} userInfo={props.user} data={table} style={{height:"350px"}} />
                </>
              )}
            </Popup>
            <p ref={messagesEndRef} />
          </div>)}
      </InfiniteScroll>
    </>
  )
}

export default Chatmsg;