import style from '../../styles/users.module.css'
const Users = (props) => {
    return (
        <div className={style.userContainer} >
            <img className={style.userImg} src={props.userInfo.avatar} alt=""/>
            <div className={style.userInfo}>
                <span className={style.userName}>{props.userInfo.first_name}</span>
                <span className={style.userText}>{props.userInfo.email}</span>
            </div>
            <div className={style.msgTime} >
                4:30 PM
            </div>
        </div>
    )
}

export default Users;