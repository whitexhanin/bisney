import { useEffect, useState } from "react";
import { getAvatarList } from "@/utils/getAvatarList";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getUserList } from "@/utils/getUserList";
import { pickItem } from './styles.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as styles from "./styles.css";
import { Back } from "@/components/Back";
import { toast } from "react-toastify";

interface Avatar {
    id: number;
    image: string;
}

const SetAvatar = () => {     
    const params = useParams().id;
    const [pick, setPick] = useState<number | undefined>();
    const [stateImage, setImage] = useState<string | undefined>();
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    
    const query = useQuery({ queryKey: ['avatarlist'], queryFn: getAvatarList });
    const userquery = useQuery({ queryKey: ['userlist'], queryFn: getUserList });

    // const selectedProfile = userquery.data?.find((profile: any) => profile.nickname === params);

const updateUserMutation = useMutation({
    mutationFn: async (newImage: string) => {
        // 실제 API 호출 대신 캐시만 업데이트
        return Promise.resolve({ success: true, image: newImage });
    },
    onSuccess: (data) => {
        // 캐시 즉시 업데이트
        queryClient.setQueryData(['userlist'], (oldData: any[]) => {
            if (!oldData) return oldData;
            
            return oldData.map(profile =>                 
                profile.nickname === params 
                    ? { ...profile, image: stateImage }
                    : profile                                
            );
            
        });
        
        // 이전 페이지로 이동
        navigate(-1);
        // 이동 후 토스트 메시지 표시
        setTimeout(() => {
            toast.success("업데이트 완료");
        }, 100);
    },
    onError: () => {
        toast.error("아바타 변경에 실패했습니다");
    }
});
    
    const handlerPick = (e: React.MouseEvent<HTMLLIElement>, id: number, image: string) => {
        e.preventDefault();        
        setImage(image);
        setPick(id);
        // 아바타 선택 시 즉시 업데이트

        updateUserMutation.mutate(image);
    }

    return (
        <>                 
         <div className={styles.wrap}>
            <Back />
             <h2 className={styles.title}>아바타 선택</h2>
             <ul className={styles.avatarList}>
                {query.data?.map((list: Avatar) => 
                    <li 
                        key={list.id} 
                        id={list.id.toString()} 
                        onClick={(e) => handlerPick(e, list.id, list.image)} 
                        className={`${styles.pickItem} ${pick === list.id ? pickItem : ''}`}
                    >
                        <img src={list.image} alt={list.id.toString()} className={styles.avatarImage} />
                    </li>
                )}            
             </ul>
         </div>
        </>
    )
}

export default SetAvatar;