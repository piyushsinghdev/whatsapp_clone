import style from '../../styles/contactList.module.css'
import SearchBar from "./SearchBar"
import UserProfile from "./UserProfile"
import Users from "./Users"
import { useEffect, useState } from "react"
import { useStoreState } from 'easy-peasy';
import { Link } from "react-router-dom"


const ContactList = () => {
   const [searchUser, setSearchUser] = useState("")
   const usersInfo = useStoreState((state) => state.userInfo[0]);
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

  

   return (
      <div className={style.container}>

         <UserProfile/>

         <SearchBar value={searchUser} searchHandler={searchHandler} />


            <div className={style.div} >

               {userList && userList.map((user, index) => (
                   
                   <Link to={`/user/${user.id}`} key={index} style={{ "textDecoration": "none", "color": "black" }}>


                  <Users  userInfo={user}  />

                  </Link>

               ))}

               {!userList.length && <div>User Not Found</div>}

            </div>

      </div>
   )
}
export default ContactList