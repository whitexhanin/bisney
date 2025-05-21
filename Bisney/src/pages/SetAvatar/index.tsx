import { useEffect, useState } from "react";
import { getAvatarList } from "@/utils/getAvatarList";
import { useQuery } from '@tanstack/react-query';
import { getUserList } from "@/utils/getUserList";
import { pickItem } from './styles.css';
import { getUser } from "@/utils/getUser";
import { useLocation, useNavigate } from 'react-router-dom';
import * as styles from "./styles.css";

const SetAvatar = () => {        
    const [pick , setPick] = useState();
    const [stateImage , setImage] = useState();
    const [changeState , setChangeState] = useState(false);
    // const mydata = useQuery
    const query = useQuery({ queryKey: ['avatarlist'] , queryFn: getAvatarList} );
    const userquery = useQuery({ queryKey: ['userlist'] , queryFn: getUserList} );
    const mydataquery = useQuery({ queryKey: ['user'], queryFn:getUser})
    const navigate = useNavigate();

    console.log('어떻게 변하나1',pick,stateImage);
    
    const handlerPick = (e , id , image) => {
        e.preventDefault();        
        
        if(pick == id){
            e.target.classList.remove(pickItem);  
            setPick(undefined);      
            setImage(undefined);              
        }else {
            e.target.classList.add(pickItem);      
            setPick(id);      
            setImage(image);
        }
        

                            
        console.log('어떻게 변하나2',pick,stateImage);
        console.log('pick',pick,image);    
    }
    const handlerSend = (e) => {
        //수정 페이지로 이동 
        //변경 된 값을 수정 페이지에 적용
        //mylist
        e.preventDefault();   
        console.log(pick);
        console.log('내데이터',mydataquery.data);
        console.log('어떻게 변하나3',pick,stateImage);
        // mydataquery.data.image = stateImage; 

        //ProdileModify 페이지로 이동
        navigate(-1)







//         userquery.data?.find(d => {   
//             console.log(d.id , pick)         
//             if(d.id == parseInt(pick)){
//                 d.image.replace(image)
//                 console.log(d.image);
//             }   
//     }
// );
        
        
        
    }
    

    return (
        <>         
         <div className={styles.wrap}>
             <h2 className={styles.title}>아바타 선택</h2>
             <ul className={styles.avatarList}>
                {query.data?.map(list => 
                    <li key={list.id} id={list.id} onClick={(e) => handlerPick(e , list.id , list.image)} className={styles.pickItem}>
                        <img src={list.image} alt={list.id} className={styles.avatarImage} />
                    </li>
                )}            
             </ul>
             <button className={styles.completeButton} onClick={handlerSend}>완료</button>
         </div>
        </>
    )
}

export default SetAvatar;