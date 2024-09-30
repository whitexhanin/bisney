import { Route, Routes } from "react-router-dom";
import Login from "@/pages/LogIn";
import SignUp from "@/pages/SignUp";
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Profile from "@/pages/Profile";
// import Download from "../../pages/Download";
import Download from "@/pages/Download";
// import Download from "@/pages/Download";
import loadable from "@loadable/component";
// const Download = loadable(()=> import('@'))


const App = () => {
    console.log('dir',__dirname);
    return (
        
        <Routes>            
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/Profile" element={<Profile />}/>
            <Route path="/download" element={<Download />}/>
        </Routes>
    )
}

export default App;