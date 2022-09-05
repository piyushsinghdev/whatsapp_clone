import style from "../../styles/userProfile.module.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popup from 'reactjs-popup';
import PopupTable from "./PopupTable";
import MessageIcon from '@mui/icons-material/Message';
import DataUsageOutlinedIcon from '@mui/icons-material/DataUsageOutlined';

const UserProfile = () => {




    return (

        <div className={style.profile} style={{ justifyContent: "space-between" }}>

            <img className={style.img} alt="User" src="https://static.remove.bg/remove-bg-web/3d75df900686714aa0c3f2ac38a019cdc089943e/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
            <div className={style.icons}>
                <div>
                    <DataUsageOutlinedIcon  className={style.icon}/>
                </div>
                <div>
                    <MessageIcon  className={style.icon}/>
                </div>
                <div>
                    <Popup position="bottom" trigger={<MoreVertIcon className={style.icon} />}>
                        <PopupTable />
                    </Popup>
                </div>

            </div>

        </div>

    )
}

export default UserProfile;