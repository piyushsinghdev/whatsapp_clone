import ContactList from "./contactlist/ContactList"
import Conversastion from "./conversastion/Conversastion"
import style from '../App.module.css'

const Index=()=>{
    return(
    <div className={style.App}>
      <ContactList/>
      <Conversastion/>     
    </div>
    )
}
export default Index;