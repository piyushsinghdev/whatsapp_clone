import style from '../../styles/msgInput.module.css'
const MsgInput=()=>{
    return(
        <div className={style.container}>
            <img  className={style.emoji} src="https://www.kindpng.com/picc/m/87-871623_emoji-sticker-face-emoticon-emoji-icon-emoji-png.png"/>
            <input className={style.input} placeholder="Type the message"/>
            <img className={style.image} src="https://static.thenounproject.com/png/1015122-200.png"/>
        </div>
    )
}

export default MsgInput;