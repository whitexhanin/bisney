import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as styles from "./styles.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserList } from "@/utils/getUserList";
import AfterLayout from "@/layouts/AfterLayout";
import { Back } from "@/components/Back";

const ProfileModifyList = () => {

    // const [userlist, setUserList] = useState([]);

    // const fetchList = async () => await fetch('/api/userlist')
    // .then((response)=> response.json())
    // .then(data => setUserList(data));

    // useEffect((()=>{
    //     fetchList();
    // }),[])

    // const { data , isLoding } =  useQuery(['userlistData'],fetchData);
    // const { data, isLoading } = useQuery(['exampleData'], fetchData);
    // const queryClient = useQueryClient();

    const query = useQuery({ queryKey: ['userlist'], queryFn: getUserList}) 

    

    // const mutation = useMutation({
    //     mutationFn: postUser,
    // })


    
    


    //프로필 api
    // const [userList, setUserList] = useState([]);
    // const [name, setName] = useState('');
    //   const addUser = () => { 
    //     fetch('/api/userlist', 
    //         { method: 'POST', 
    //             headers: { 'Content-Type': 'application/json', }, 
    //             body: JSON.stringify({ user: name }), }) 
    //             .then(response => response.json()) 
    //             .then(data => { console.log(data); 
    //                 fetchUserList(); }); 
    //             }; 

    //     const fetchUserList = () => { 
    //         fetch('/api/userlist') 
    //         .then(response => response.json()) 
    //         .then(data => setUserList(data)); 
    //     }; 

    //     useEffect(() => { fetchUserList(); }, []);

    return(
        <>
         {/* <div> 
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
            <button onClick={addUser}>프로필 추가</button>
            <ul> {userList.map((user, index) => ( <li key={index}>{user.nickname}</li> ))} </ul>
        </div> */}
        <AfterLayout>            
            <div className={styles.wrap}>
                <Back/>
                <h2>프로필 수정</h2>
                <p>수정할 프로필을 선택하세요</p>
                <ul className={styles.userlist}>
                    {query.data?.map((user)=>(
                        <li className={styles.useritem} style={{background:`url(${user.image}) top center no-repeat`,backgroundSize:'100%'}}>                                                                                  
                            <Link to={`/profile-modifylist/${user.nickname}`} >
                                <span className={styles.userName}>{user.nickname}</span>
                            </Link>                              
                        </li>    
                    ))}                
                </ul>
                <Link to="" className={styles.link}>프로필 추가</Link>
            </div>
        </AfterLayout>
        </>
    )
}

export default ProfileModifyList;