import style from '../../styles/conversastion.module.css'
import styles from "../../styles/userProfile.module.css"
import Chatmsg from './Chatmsg';
import MsgInput from './MsgInput';
import { useStoreState } from 'easy-peasy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Popup from 'reactjs-popup';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PopupTable from '../PopupTable';
import { useStoreActions } from 'easy-peasy';
import Reply from './Reply';



const Conversastion = () => {
    let params = useParams();

    const table = ["contactInfo", "selectmessage", "closechat", "mutenotification", "clearmessage", "chat"]

    const userlist = useStoreState((state) => state.userInfo[0]);           //All user list

    const cancelIcon = useStoreState((state) => state.user);                   //To cancel the reply

    const deletemessage=useStoreActions((actions)=>actions.deletemessage)     

    const selectMessage=useStoreActions((actions)=>actions.selectMessage)     

    const replyInfo = useStoreState((state) => state.replyInfo);            // Selected message Info

    const userInfo = userlist.filter((user) => parseInt(user.id) === parseInt(params.id))   //Particular User Info

    const [user, setUser] = useState(userInfo[0])                             //Stored in state of particular user Info

    useEffect(() => { setUser(userInfo[0]) }, [userInfo])


    const replyHandler = (data, userdata,userInfo,index) => {
        if (data === "Reply") { 
           selectMessage(userdata)
        }
        if (data === "Delete") { 
            deletemessage({
                id:userInfo.id,
                index:index
            })
         }

    }

    const cancelreplyHandler = () => {
        selectMessage()
    }

    return (
        <div className={style.container}>

            <div className={styles.profile} >
                <div style={{ "display": "flex" }}>
                    <div>
                        <img className={styles.img} alt="User" src={user.avatar} />
                    </div>
                    <div>
                        <p className={style.profileName}>{user.first_name}</p>

                    </div>
                </div>

                <div className={ style.header}>
                    <div>
                        <SearchOutlinedIcon style={{ "fontSize": "30px" }} />

                    </div>
                    <div>
                        <Popup position="bottom" trigger={<MoreVertIcon />}>
                            <PopupTable data={table} style={{height:"350px"}} />
                        </Popup>

                    </div>
                </div>
            </div>
            <div style={{ "overflowY": "scroll", "height": "100%" }}>
                <Chatmsg user={user}  replyHandler={replyHandler}   />
            </div>
            
            {cancelIcon && <div className={style.reply}>
                <Reply replyInfo={replyInfo} userInfo={userInfo[0]}/>

                <div className={style.replycancel} onClick={cancelreplyHandler}>X</div>

            </div> }
            <MsgInput replyInfo={replyInfo}  />
        </div>
    )
}
export default Conversastion;