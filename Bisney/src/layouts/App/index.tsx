import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";

const Download = loadable(()=> import('@/pages/Download'));
const Login = loadable(()=> import('@/pages/LogIn'));
const SignUp = loadable(()=> import('@/pages/SignUp'));
const Home = loadable(()=> import('@/pages/Home'));
const Search = loadable(()=> import('@/pages/Search'));
const Profile = loadable(()=> import('@/pages/Profile'));
const Product = loadable(()=> import('@/pages/Product'));
const ProductDetail = loadable(()=> import('@/pages/ProductDetail'));
const CreatePassword = loadable(()=> import('@/pages/CreatePassword'));
const CreateEmail = loadable(()=> import('@/pages/CreateEmail'));
const Main = loadable(()=> import('@/pages/Main'));



const App = () => {
        
    return (        
        <Routes>                        
            <Route path="/" element={<Main/>}/>            
            <Route path="/login" element={<Login/>}/>            
            <Route path="/signup">
                <Route path="create-email" element={<CreateEmail/>}/>
                <Route path="create-password" element={<CreatePassword/>}/>
            </Route>
            <Route path="/home" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/download" element={<Download />}/>
            <Route path="/product" element={<Product />}>            
                <Route path=":id" element={<ProductDetail />}></Route>    
            </Route>
        </Routes>
    )
}

export default App;
