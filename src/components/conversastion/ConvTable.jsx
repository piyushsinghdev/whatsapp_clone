import style from "../../styles/popup.module.css"
const ConvTable = () => {
    return (
        <>
            <div className={style.container}>
                <table className={style.table} style={{height:"400px",padding:"10px",width:"200px"}}>
                    <tr >
                        <td>Contact Info</td>
                    </tr>
                    <tr>
                        <td>Select Message</td>
                    </tr>
                    <tr>
                        <td>Close Chat</td>
                    </tr>
                    <tr>
                        <td>Mute Notification</td>
                    </tr>
                    <tr>
                        <td>Clear Message</td>
                    </tr>
                    <tr>
                        <td>Delete Chat</td>
                    </tr>
                </table>
            </div>
        </>
    )
}
export default ConvTable;