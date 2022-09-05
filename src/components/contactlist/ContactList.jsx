import UserProfile from "./UserProfile"
import style from '../../styles/contactList.module.css'
import SearchBar from "./SearchBar"
import Users from "./Users"
import { useEffect, useState } from "react"
import { useStoreState } from 'easy-peasy';
import { useStoreActions } from 'easy-peasy';


const ContactList = () => {
   const [searchUser, setSearchUser] = useState("")
   const usersInfo = useStoreState((state) => state.userInfo);
   //const user = useStoreState((state) => state.user);
   const userData = useStoreActions((actions) => actions.userClick);
   const [userList, setUserList] = useState(usersInfo)



   useEffect(() => {

      let users = userList;
      searchUser ?
         setUserList(users.filter((user) => user.first_name.toLowerCase().includes(searchUser.toLowerCase())))
         : setUserList(usersInfo)
   }, [searchUser])


   const searchHandler = (e) => {
      setSearchUser(e.target.value)
   }

   const userClickHandler = (user) => {
      userData(user)
   }

   return (
      <div className={style.container}>

         <UserProfile />

         <SearchBar value={searchUser} searchHandler={searchHandler} />

         <div className={style.div} >

            {userList && userList.map((user,index) => (

               <Users key={index} userInfo={user} userClickHandler={userClickHandler} />
            ))}

            {!userList.length && <div>User Not Found</div>}

         </div>

      </div>
   )
}
export default ContactList