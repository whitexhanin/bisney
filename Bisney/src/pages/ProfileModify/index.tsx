import { Link, useNavigate, useParams } from "react-router-dom";
import * as styles from "./style.css";
import { useEffect, useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getUserList } from "@/utils/getUserList";
// import { getUser } from "@/utils/getUser";
import { Back } from "@/components/Back";
import { toast } from "react-toastify";

const ProfileModify = () => {
    const params = useParams().id;
    const query = useQuery({ 
        queryKey: ['userlist'], 
        queryFn: getUserList,
        // 캐시가 있더라도 항상 최신 데이터를 가져오도록 설정
        staleTime: 0,
        cacheTime: 0
    });   
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    // 선택된 프로필 정보 찾기
    console.log('params , query',params , query.data);
    const selectedProfile = query.data?.find((profile: any) => profile.nickname === params);
    console.log(params);
    
    const [nickname, setNickname] = useState(selectedProfile?.nickname ?? "");
    const [autoplay, setAutoplay] = useState(selectedProfile?.playsetting?.autoplay ?? false);

    // 선택된 프로필이 변경될 때마다 상태 업데이트
    useEffect(() => {
        if (selectedProfile) {
            setNickname(selectedProfile.nickname);
            setAutoplay(selectedProfile.playsetting?.autoplay ?? false);
        }
    }, [selectedProfile]);

    // 닉네임 변경 mutation
    const updateNicknameMutation = useMutation({
        mutationFn: async (newNickname: string) => {
            const response = await fetch(`/api/profiles/${params}/nickname`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nickname: newNickname }),
            });
            if (!response.ok) {
                throw new Error('닉네임 변경에 실패했습니다');
            }
            return response.json();
        },
        onSuccess: () => {
            // 캐시 업데이트
            queryClient.setQueryData(['userlist'], (oldData: any[]) => 
                oldData.map(profile => 
                    profile.id === params 
                        ? { ...profile, nickname: nickname }
                        : profile
                )
            );
            toast.success("닉네임이 변경되었습니다");
            navigate(-1);
        },
        onError: () => {
            toast.error("닉네임 변경에 실패했습니다");
        }
    });

    // 자동재생 설정 mutation
    const updateAutoplayMutation = useMutation({
        mutationFn: async (newAutoplay: boolean) => {
            const response = await fetch(`/api/profiles/${params}/settings/autoplay`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ autoplay: newAutoplay }),
            });
            if (!response.ok) {
                throw new Error('설정 저장에 실패했습니다');
            }
            return response.json();
        },
        onSuccess: () => {
            // 캐시 업데이트
            queryClient.setQueryData(['userlist'], (oldData: any[]) => 
                oldData.map(profile => 
                    profile.id === params 
                        ? { 
                            ...profile, 
                            playsetting: {
                                ...profile.playsetting,
                                autoplay: autoplay
                            }
                        }
                        : profile
                )
            );
            toast.success("설정이 저장되었습니다");
        },
        onError: () => {
            toast.error("설정 저장에 실패했습니다");
            setAutoplay(!autoplay); // 실패시 이전 상태로 롤백
        }
    });

    console.log(query.data);    
    console.log(params)
    console.log(autoplay)
    
    //수정 할 정보 가져오기
    // const [userlist, setUserList] = useState([]);

    // const fetchList = async () => await fetch('/api/userlist')
    // .then((response)=> response.json())
    // .then(data => setUserList(data));

    

    // const mydata = query.data?.find(user => user.nickname == params);
    


   
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value);
    }

    const handleAutoplay = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        setAutoplay(newValue);
        updateAutoplayMutation.mutate(newValue);
    }

    const handleSave = () => {
        if (nickname.trim() === "") {
            toast.error("닉네임을 입력해주세요");
            return;
        }
        updateNicknameMutation.mutate(nickname);
    }

    // useEffect((()=>{
    //     fetchList();
    // }),[])
    

    return (
        <>            
            <div className={styles.wrap}>
                <Back />
                <h2>프로필 수정</h2>
                <div className={styles.layoutwrap}>
                    <label className={styles.labelname} htmlFor="name">이름</label>
                    <input
                        className={styles.inputname}
                        type="text"
                        id="name"                        
                        value={nickname}    
                        onChange={handleChange}                                            
                    />
                    <Link to={`/setavatar/${nickname}`}className={styles.useritem} style={{backgroundImage: `url(${selectedProfile?.image})`}}>아바타 수정</Link>                   
                </div>            
                <div className={styles.settingsSection}>
                    <h3 className={styles.settingsTitle}>재생 및 설정</h3>
                    <div className={styles.settingsItem}>                        
                        <label className={styles.settingsLabel} htmlFor="autoplaySwitch">      
                            자동재생            
                        </label>
                        <label className={styles.switchWrapper}>
                            <input type="checkbox" name="autoplay" id="autoplaySwitch" checked={autoplay} onChange={handleAutoplay} />
                            <span className={styles.slider}></span>
                        </label>
                    </div>                
                    <div className={styles.settingsItem}>
                        <label className={styles.settingsLabel} htmlFor="language">      
                            앱언어      
                        </label>                        
                    </div>                
                </div>
                <button className={styles.deleteButton}>프로필 삭제</button>
                <button className={styles.saveButton} onClick={handleSave}>완료</button>
            </div>
        </>
    )
}

export default ProfileModify;