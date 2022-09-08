import style from '../../styles/reply.module.css'

const Reply = (props) => {
    return (
        <div className={style.container}>
            <div className={style.body}>
                <div style={{ color: `${props.replyInfo.senderID === 0 ? "blue" : "green"}` ,"fontSize":"20px"}}>{props.replyInfo.senderID === 0 ? "You" : props.userInfo.first_name}</div>
                <div style={{ margin: "5px 0px 5px 0px" ,"fontSize":"13px"}}>{props.replyInfo.text}</div>
            </div>
        </div>
    )

}

export default Reply; 
