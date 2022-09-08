import style from "../styles/popup.module.css"
const PopupTable = (props) => {
    return (
        <>
            <div  onClick={props.close}>
                <table  onClick={props.close}className={style.table} style={{height:`${props.style.height}`,padding:"10px",width:"200px"}}>
                    <tbody>
                    {props.data.map((data,index)=>
                    <tr onClick={()=>{props.replyHandler(data,props.message,props.userInfo,props.index)}}  key={index} >
                        <td >{data}</td>
                    </tr>
                    )}
                    </tbody>
                   
                </table>
            </div>
        </>
    )
}
export default PopupTable;