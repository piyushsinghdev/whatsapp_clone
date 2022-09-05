import style from '../../styles/conversastion.module.css'
import UserProfile from '../contactlist/UserProfile';
import styles from "../../styles/userProfile.module.css"
import Chatmsg from './Chatmsg';
import MsgInput from './MsgInput';
import { useStoreState } from 'easy-peasy';
import image from './../../image/whatsap.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Popup from 'reactjs-popup';
import ConvTable from './ConvTable';



const Conversastion = () => {
    const user = useStoreState((state) => state.user);


    return (
        <div className={style.container}>
            {user ? <>
                <div className={styles.profile} >
                    <div style={{"display":"flex"}}>
                        <div>
                        <img className={styles.img} alt="User" src={user.avatar} />
                        </div>
                        <div>
                        <p style={{ "fontWeight": "light", "fontSize": "larger","marginRight":"10px" }}>{user.first_name}</p>

                        </div>
                    </div>

                    <div style={{"display":"flex","justifyContent":"space-between","width":"70px"}}>
                        <div>
                        <SearchOutlinedIcon style={{"fontSize":"30px"}} />

                        </div>
                        <div>
                        <Popup position="bottom" trigger={<MoreVertIcon/>}>
                           <ConvTable />
                        </Popup>

                        </div>
                    </div>


                </div>
                <div style={{ display: "flex", flexDirection: "column", overflowX: "hidden", overflowY: "scroll", height: "100%" }}>
                    <Chatmsg />
                </div>
                <MsgInput />
            </> : <div style={{ height: "100%" }}><img width="100%" height="100%" src={image} /></div>}
        </div>
    )
}
export default Conversastion;