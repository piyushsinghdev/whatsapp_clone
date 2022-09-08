import ContactList from "./contactlist/ContactList"
import Conversastion from "./conversastion/Conversastion"
import style from '../App.module.css'
import image from './../image/whatsap.png'
import { useParams } from "react-router-dom";



const Index=()=>{
  let params = useParams();
    return(
    <div className={style.App}>
      <ContactList/>
      
      {params.id ?<Conversastion />:<div ><img width="100%" height="100%" alt="Whatsapp" src={image} /></div>}
    </div>
    )
}
export default Index;