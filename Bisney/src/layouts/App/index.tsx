import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Download = loadable(()=> import('@/pages/Download'));
const Login = loadable(()=> import('@/pages/LogIn'));
const SignUp = loadable(()=> import('@/pages/SignUp'));
const Home = loadable(()=> import('@/pages/Home'));
const Search = loadable(()=> import('@/pages/Search'));
const Profile = loadable(()=> import('@/pages/Profile'));


const App = () => {
        
    return (
        
        <Routes>            
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/download" element={<Download />}/>
        </Routes>
    )
}

export default App;
