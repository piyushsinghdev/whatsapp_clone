import style from '../../styles/chatmsg.module.css'
import { useStoreState } from 'easy-peasy';

const Chatmsg = () => {
  const user = useStoreState((state) => state.user.message);

  console.log(user, '..............................................')


  return (
    <>
      {user.map((user) => <div className={user.senderID===0 ?style.msg:style.msg1}>
        <p className={user.senderID===0?style.chatmsg:style.chatmsg1}>{user.text}</p>
      </div>)}
    </>


  )
}

export default Chatmsg;