import style from '../../styles/popup.module.css'
const PopupTable = () => {
    return (
        <div className={style.container}>
            <table className={style.table}>
                <tr >
                    <td>New Group</td>
                </tr>
                <tr>
                    <td>Starred Message</td>
                    </tr>
                <tr>
                    <td>Settings</td>
                    </tr>
                <tr>
                    <td>Logout</td>
                </tr>
            </table>
        </div>
    )
}

export default PopupTable;