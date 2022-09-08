import {Routes,Route,} from "react-router-dom";
import App from "../App";
import Conversastion from "../components/conversastion/Conversastion";


const PageRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<App/>} >
                <Route path="/user/:id" element={<Conversastion/>}/>
            </Route>
          
        </Routes>
    )
}

export default PageRoute;