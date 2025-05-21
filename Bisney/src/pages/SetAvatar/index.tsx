import { useEffect, useState } from "react";
import { getAvatarList } from "@/utils/getAvatarList";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserList } from "@/utils/getUserList";
import { pickItem } from './styles.css';
import { getUser, updateUser } from "@/utils/getUser";
import { useLocation, useNavigate } from 'react-router-dom';
import * as styles from "./styles.css";
import { Back } from "@/components/Back";

const SetAvatar = () => {        
    const [pick, setPick] = useState<number | undefined>();
    const [stateImage, setImage] = useState<string | undefined>();
    const [changeState, setChangeState] = useState(false);
    const queryClient = useQueryClient();
    
    const query = useQuery({ queryKey: ['avatarlist'], queryFn: getAvatarList });
    const userquery = useQuery({ queryKey: ['userlist'], queryFn: getUserList });
    const mydataquery = useQuery({ queryKey: ['user'], queryFn: getUser });
    
    const updateUserMutation = useMutation({
        mutationFn: (newImage: string) => updateUser({ ...mydataquery.data, image: newImage }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['user'] });
            navigate(-1);
        }
    });

    const navigate = useNavigate();
    
    const handlerPick = (e: React.MouseEvent<HTMLLIElement>, id: number, image: string) => {
        e.preventDefault();        
        setImage(image);
        updateUserMutation.mutate(image);
        
        // if(pick === id){
        //     e.currentTarget.classList.remove(pickItem);  
        //     setPick(undefined);      
        //     setImage(undefined);              
        // } else {
        //     e.currentTarget.classList.add(pickItem);      
        //     setPick(id);      
        //     setImage(image);
        // }
    }

    const handlerSend = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();   
        // if (stateImage) {
        //     updateUserMutation.mutate(stateImage);
        // }
    }

    console.log('어떻게 변하나1',pick,stateImage);
    
    console.log('어떻게 변하나2',pick,stateImage);
    console.log('pick',pick,stateImage);    

    return (
        <>                 
         <div className={styles.wrap}>
            <Back />
             <h2 className={styles.title}>아바타 선택</h2>
             <ul className={styles.avatarList}>
                {query.data?.map(list => 
                    <li key={list.id} id={list.id.toString()} onClick={(e) => handlerPick(e, list.id, list.image)} className={styles.pickItem}>
                        <img src={list.image} alt={list.id.toString()} className={styles.avatarImage} />
                    </li>
                )}            
             </ul>
             <button className={styles.completeButton} onClick={handlerSend}>완료</button>
         </div>
        </>
    )
}

export default SetAvatar;