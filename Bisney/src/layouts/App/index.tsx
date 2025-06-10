import { Route, Routes } from "react-router-dom";
import loadable from "@loadable/component";



const Download = loadable(()=> import('@/pages/Download'));
const Login = loadable(()=> import('@/pages/LogIn'));
const SignUp = loadable(()=> import('@/pages/SignUp'));
const Home = loadable(()=> import('@/pages/Home'));
const Search = loadable(()=> import('@/pages/Search'));
const Profile = loadable(()=> import('@/pages/Profile'));
const Products = loadable(()=> import('@/pages/Products'));
const ProductDetail = loadable(()=> import('@/pages/ProductDetail'));
const CreatePassword = loadable(()=> import('@/pages/CreatePassword'));
const CreateEmail = loadable(()=> import('@/pages/CreateEmail'));
const Main = loadable(()=> import('@/pages/Main'));
const ProductList = loadable(()=> import('@/pages/ProductList'));
const ProfileModifyList = loadable(()=> import('@/pages/ProfileModifyList'));
const ProfileModify = loadable(()=> import('@/pages/ProfileModify'));
const SetAvatar = loadable(()=> import('@/pages/SetAvatar'));




const App = () => {
        
    return (        
        <Routes>                        
            <Route path="/" element={<Main/>}/>            
            <Route path="/login">            
                <Route path="create-email" element={<CreateEmail/>}/>
                <Route path="create-password" element={<CreatePassword/>}/>
            </Route>
            <Route path="/signup">
                <Route path="create-email" element={<CreateEmail/>}/>
                <Route path="create-password" element={<CreatePassword/>}/>
            </Route>
            <Route path="/home" element={<Home />}/>
            <Route path="/search" element={<Search />}/>
            <Route path="/profile" element={<Profile />}>                
            </Route>
            <Route path="/profile-modifylist" element={<ProfileModifyList />}>                
            </Route>
            <Route path="/profile-modifylist/:id" element={<ProfileModify/>}></Route>
            <Route path="/download" element={<Download />}/>
            <Route path="/products" element={<Products />}>            
                <Route path=":id" element={<ProductDetail />}/>
            </Route>
            <Route path="/productlist/:id" element={<ProductList />}>                
            </Route>
            <Route path="/setavatar/:id" element={<SetAvatar />}/>
        </Routes>
    )
}

export default App;
